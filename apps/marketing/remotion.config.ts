import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setConcurrency(4);
Config.setEntryPoint("./src/index.ts");

// Remotion's forked css-loader intentionally has no CSS-modules support, so
// we register a parallel rule for `*.module.css` that uses the real
// `css-loader` (with `namedExport: false` so `import styles from ...` still
// resolves to a default export). Plain `.css` keeps going through Remotion's
// own loader — we just exclude `.module.css` from it so modules don't get
// double-processed.
Config.overrideWebpackConfig((config) => {
  const rules = config.module?.rules ?? [];
  const patchedRules = rules.map((rule) => {
    if (
      rule &&
      typeof rule === "object" &&
      rule.test instanceof RegExp &&
      rule.test.source === "\\.css$" &&
      !("exclude" in rule && rule.exclude)
    ) {
      return { ...rule, exclude: /\.module\.css$/ };
    }
    return rule;
  });

  return {
    ...config,
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve?.extensions ?? []), ".ts", ".tsx", ".js"],
    },
    module: {
      ...config.module,
      rules: [
        ...patchedRules,
        {
          test: /\.module\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  localIdentName: "[name]__[local]__[hash:base64:5]",
                  namedExport: false,
                  exportLocalsConvention: "as-is",
                },
                esModule: true,
              },
            },
          ],
          type: "javascript/auto",
        },
      ],
    },
  };
});
