import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module?.rules?.forEach((rule) => {
      if (
        rule &&
        typeof rule === "object" &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
      ) {
        rule.exclude = /\.svg$/;
      }
    });
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  managerHead: (head) => `
  ${head}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
`
};
export default config;
