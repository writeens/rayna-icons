import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const packageName = "raynaicons-react";
const filenamePrefix = "index";

export default defineConfig({
  plugins: [react()],
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
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    outDir: "build",
    copyPublicDir: false,
  },
});
