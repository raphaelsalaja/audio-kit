import type { Metadata } from "next";
import { View } from "@/app/library/_components/view";
import { getPatchesAllTime } from "@/lib/db/patches";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Library",
  description: "Browse and discover community sound patches for your UI.",
  alternates: { canonical: "https://audio.raphaelsalaja.com/library" },
  openGraph: {
    title: "Library",
    description: "Browse and discover community sound patches for your UI.",
    url: "https://audio.raphaelsalaja.com/library",
  },
};

export default async function PatchesPage() {
  const patches = await getPatchesAllTime();

  return <View patches={patches} />;
}
