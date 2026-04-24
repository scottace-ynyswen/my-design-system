import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { createRequire } from "module";
import { fileURLToPath, URL } from "url";
import path from "path";

const require = createRequire(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(ts|tsx)",
    "../../../packages/ui/src/**/*.mdx",
    "../../../packages/ui/src/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        extensions: [".web.tsx", ".web.ts", ".web.jsx", ".web.js", ".tsx", ".ts", ".jsx", ".js"],
        alias: {
          "react-native": require.resolve("react-native-web"),
          "@my-ds/ui": path.resolve(__dirname, "../../../packages/ui/src/index.ts"),
        },
      },
      define: {
        // Required by some RN libs
        __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? "development"),
      },
    });
  },
};

export default config;
