const path = require("path");

module.exports = {
  staticDirs: ["../public"],
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@react-theming/storybook-addon",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      resolve: {
        alias: {
          components: path.resolve(__dirname, "../components"),
          atoms: path.resolve(__dirname, "../components/atoms"),
          molecules: path.resolve(__dirname, "../components/molecules"),
          organisms: path.resolve(__dirname, "../components/organisms"),
          pages: path.resolve(__dirname, "../components/pages"),
          context: path.resolve(__dirname, "../context"),
          hooks: path.resolve(__dirname, "../hooks"),
          resources: path.resolve(__dirname, "../resources"),
          types: path.resolve(__dirname, "../types"),
          utils: path.resolve(__dirname, "../utils"),
        },
      },
    });

    return config;
  },
};
