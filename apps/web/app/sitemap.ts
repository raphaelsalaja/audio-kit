import type { MetadataRoute } from "next";
import { getPatchesAllTime } from "@/lib/db/patches";
import { source } from "@/lib/docs/source";

const BASE_URL = "https://audio.raphaelsalaja.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docPages = source.getPages().map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  let patchPages: MetadataRoute.Sitemap = [];
  try {
    const patches = await getPatchesAllTime();
    patchPages = patches.map((patch) => ({
      url: `${BASE_URL}/library/${patch.name}`,
      lastModified: patch.updatedAt ?? new Date(),
      changeFrequency: "weekly" as const,
    }));
  } catch {
    // DB unavailable at build time — skip patch entries
  }

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/library`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    ...docPages,
    ...patchPages,
  ];
}
