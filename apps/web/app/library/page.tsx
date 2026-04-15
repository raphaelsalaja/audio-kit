import type { Metadata } from "next";
import { PatchList } from "@/components/patch-list";
import { getPatchesAllTime } from "@/lib/patches";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Library",
  description: "Browse and discover community sound patches for your UI.",
};

export default async function PatchesPage() {
  const patches = await getPatchesAllTime();

  return <PatchList patches={patches} />;
}
