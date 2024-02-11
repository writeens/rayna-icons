import path from "path";
import { defineConfig } from "vite";

const packageName = "rayna";
const filenamePrefix = "index";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: packageName,
      fileName: (format) => {
        switch (format) {
          case "es":
            return `${filenamePrefix}.mjs`;
          case "cjs":
            return `${filenamePrefix}.cjs`;
          default:
            return `${filenamePrefix}.${format}.js`;
        }
      },
      formats: ["es", "cjs"],
    },
    outDir: "build",
  },
});
