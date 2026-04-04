import {
  transformerNotationFocus,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "ayu-light",
        dark: "ayu-dark",
      },
      transformers: [
        transformerNotationHighlight(),
        transformerNotationFocus(),
      ],
    },
  },
});
