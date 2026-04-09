import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@web-kits/audio", "@web-kits/icons", "@web-kits/ui"],
  async redirects() {
    return [
      {
        source: "/resources/github",
        destination: "https://github.com/raphaelsalaja/audio-kit",
        permanent: false,
      },
      {
        source: "/resources/twitter",
        destination: "https://twitter.com/raphaelsalaja",
        permanent: false,
      },
      {
        source: "/resources/npm",
        destination: "https://npmjs.com/package/@web-kits/audio",
        permanent: false,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(config);
