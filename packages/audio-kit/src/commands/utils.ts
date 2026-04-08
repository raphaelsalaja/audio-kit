import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { join, resolve, isAbsolute } from "node:path";

export const REGISTRY_BASE = "https://audio-kit.dev/api";

export interface PackIndexEntry {
  name: string;
  file: string;
  description: string;
  tags: string[];
}

export interface InstalledPack {
  file: string;
  name: string;
  description?: string;
  tags?: string[];
  soundCount: number;
}

export interface DiscoveredPack {
  name: string;
  path: string;
  downloadUrl: string;
  description?: string;
  soundCount: number;
}

export function getPacksDir(): string {
  const cwd = process.cwd();
  if (existsSync(join(cwd, "public"))) {
    return resolve(cwd, "public", "packs");
  }
  return resolve(cwd, "packs");
}

export function parseGitHubSource(source: string): {
  owner: string;
  repo: string;
  branch: string;
  path: string;
} | null {
  const ghUrlMatch = source.match(
    /^https?:\/\/github\.com\/([^/]+)\/([^/]+?)(?:\/tree\/([^/]+)(?:\/(.+))?)?$/,
  );
  if (ghUrlMatch) {
    return {
      owner: ghUrlMatch[1],
      repo: ghUrlMatch[2],
      branch: ghUrlMatch[3] ?? "main",
      path: ghUrlMatch[4] ?? "",
    };
  }

  const shorthand = source.match(/^([^/]+)\/([^/]+)$/);
  if (shorthand) {
    return {
      owner: shorthand[1],
      repo: shorthand[2],
      branch: "main",
      path: "",
    };
  }

  return null;
}

interface GitHubTreeItem {
  path: string;
  type: string;
}

export async function discoverPacksFromGitHub(
  source: string,
): Promise<DiscoveredPack[]> {
  const parsed = parseGitHubSource(source);
  if (!parsed) {
    throw new Error(
      `Invalid source: ${source}. Use owner/repo or a GitHub URL.`,
    );
  }

  const { owner, repo, branch, path: subPath } = parsed;

  const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
  const res = await fetch(treeUrl, {
    headers: { Accept: "application/vnd.github.v3+json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch repo tree: ${res.status}`);
  }

  const tree = (await res.json()) as { tree: GitHubTreeItem[] };

  const jsonFiles = tree.tree.filter((item) => {
    if (item.type !== "blob" || !item.path.endsWith(".json")) return false;
    if (subPath && !item.path.startsWith(subPath)) return false;
    if (item.path.includes("node_modules/")) return false;
    if (item.path.includes("package.json")) return false;
    if (item.path.includes("tsconfig")) return false;
    if (item.path.includes(".changeset/")) return false;
    return true;
  });

  const packs: DiscoveredPack[] = [];

  for (const file of jsonFiles) {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file.path}`;
    try {
      const r = await fetch(rawUrl);
      if (!r.ok) continue;
      const data = (await r.json()) as Record<string, unknown>;
      if (!validatePack(data)) continue;

      packs.push({
        name: data.name,
        path: file.path,
        downloadUrl: rawUrl,
        description: (data as { description?: string }).description,
        soundCount: Object.keys(data.sounds).length,
      });
    } catch {}
  }

  return packs;
}

export function isGitHubSource(source: string): boolean {
  return parseGitHubSource(source) !== null;
}

export function isLocalSource(source: string): boolean {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    return false;
  }
  const abs = isAbsolute(source) ? source : resolve(process.cwd(), source);
  return existsSync(abs);
}

export async function discoverPacksFromLocal(
  source: string,
): Promise<DiscoveredPack[]> {
  const abs = isAbsolute(source) ? source : resolve(process.cwd(), source);

  if (abs.endsWith(".json")) {
    const raw = await readFile(abs, "utf-8");
    const data = JSON.parse(raw) as Record<string, unknown>;
    if (!validatePack(data)) {
      throw new Error(`${source} is not a valid sound pack.`);
    }
    return [
      {
        name: data.name,
        path: abs,
        downloadUrl: abs,
        description: (data as { description?: string }).description,
        soundCount: Object.keys(data.sounds).length,
      },
    ];
  }

  const files = await readdir(abs);
  const packs: DiscoveredPack[] = [];

  for (const file of files) {
    if (!file.endsWith(".json") || file === "index.json") continue;
    try {
      const filePath = join(abs, file);
      const raw = await readFile(filePath, "utf-8");
      const data = JSON.parse(raw) as Record<string, unknown>;
      if (!validatePack(data)) continue;
      packs.push({
        name: data.name,
        path: filePath,
        downloadUrl: filePath,
        description: (data as { description?: string }).description,
        soundCount: Object.keys(data.sounds).length,
      });
    } catch {}
  }

  return packs;
}

export async function fetchPackIndex(): Promise<PackIndexEntry[]> {
  const res = await fetch(`${REGISTRY_BASE}/packs`);
  if (!res.ok) {
    throw new Error(`Failed to fetch pack index: ${res.status}`);
  }
  return res.json() as Promise<PackIndexEntry[]>;
}

export async function fetchPackJson(
  nameOrUrl: string,
): Promise<Record<string, unknown>> {
  const url = nameOrUrl.startsWith("http")
    ? nameOrUrl
    : `${REGISTRY_BASE}/pack/${nameOrUrl}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch pack: ${res.status}`);
  }
  return res.json() as Promise<Record<string, unknown>>;
}

export async function registerPack(url: string): Promise<void> {
  try {
    await fetch(`${REGISTRY_BASE}/packs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
  } catch {
    // Silent — registration is best-effort
  }
}

export function validatePack(
  data: Record<string, unknown>,
): data is { name: string; sounds: Record<string, unknown> } {
  return (
    typeof data.name === "string" &&
    typeof data.sounds === "object" &&
    data.sounds !== null
  );
}

export async function getInstalledPacks(): Promise<InstalledPack[]> {
  const dir = getPacksDir();
  if (!existsSync(dir)) return [];

  const files = await readdir(dir);
  const packs: InstalledPack[] = [];

  for (const file of files) {
    if (!file.endsWith(".json") || file === "index.json") continue;
    try {
      const raw = await readFile(join(dir, file), "utf-8");
      const data = JSON.parse(raw);
      if (validatePack(data)) {
        packs.push({
          file,
          name: data.name,
          description: (data as { description?: string }).description,
          tags: (data as { tags?: string[] }).tags,
          soundCount: Object.keys(data.sounds).length,
        });
      }
    } catch {
      // skip invalid files
    }
  }

  return packs;
}
