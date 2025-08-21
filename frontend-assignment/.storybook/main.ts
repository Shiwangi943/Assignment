import type { StorybookConfig } from "@storybook/react-vite"; // or react-webpack5 depending on setup

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes", // ✅ add this
  ],
  framework: {
    name: "@storybook/react-vite", // or "@storybook/react-webpack5"
    options: {},
  },
};

export default config;
