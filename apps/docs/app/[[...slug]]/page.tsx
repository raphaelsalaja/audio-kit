import { findNeighbour } from "fumadocs-core/page-tree";
import { notFound } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { SoundBuilder } from "@/components/builder";
import { Card, CardGrid } from "@/components/card";
import { Pre, Tabs } from "@/components/code-block";
import { Demo, DemoGrid } from "@/components/demo";
import { Home } from "@/components/home";
import { PageNav } from "@/components/page-nav";
import proseStyles from "@/components/prose/styles.module.css";
import { Step, Steps } from "@/components/steps";
import { source } from "@/lib/source";
import styles from "./styles.module.css";

function Table(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div className={proseStyles.tableWrapper}>
      <table {...props} />
    </div>
  );
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  const page = source.getPage(params.slug);

  if (!page) notFound();

  const { body: MDX } = page.data;

  const tree = source.getPageTree();

  const neighbours = findNeighbour(tree, page.url);

  if (page.url === "/") {
    return <Home />;
  }

  return (
    <div className={styles.container}>
      <article className={styles.content}>
        <div className={proseStyles.prose}>
          <h1 className={styles.title}>{page.data.title}</h1>
          <MDX
            components={{
              pre: Pre,
              table: Table,
              Steps,
              Step,
              Card,
              CardGrid,
              Demo,
              DemoGrid,
              SoundBuilder,
              Tabs,
            }}
          />
        </div>
        <PageNav previous={neighbours.previous} next={neighbours.next} />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: `https://audio-kit.dev${page.url}`,
    },
  };
}
