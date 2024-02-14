import { defineConfig, mergeConfig } from "vitest/config";
// eslint-disable-next-line import/extensions
import viteConfig from "./vite.config.mjs";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["tests/vitest.setup.ts"],
    },
  }),
);
