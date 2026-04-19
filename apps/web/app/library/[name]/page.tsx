import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as View from "@/app/library/[name]/_components/view";
import { getPatchByName, getPatchSounds } from "@/lib/db/patches";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const patch = await getPatchByName(name);
  if (!patch) return { title: "Not Found" };

  const title = `${patch.name} by ${patch.author}`;
  const url = `https://audio.raphaelsalaja.com/library/${name}`;

  return {
    title,
    description: patch.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: patch.description ?? undefined,
      url,
    },
  };
}

export default async function Page({ params }: Props) {
  const { name } = await params;

  const patch = await getPatchByName(name);

  if (!patch) notFound();

  const sounds = await getPatchSounds(patch.id);

  return (
    <View.Root patch={patch} sounds={sounds}>
      <View.Breadcrumb />
      <View.Main>
        <View.Header />
        <View.Install />
        <View.Sounds />
      </View.Main>
    </View.Root>
  );
}
