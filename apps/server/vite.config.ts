import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

function getExternalModules() {
  const packageJsonPath = path.resolve(__dirname, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const dependencies = packageJson.dependencies || {};
  return Object.keys(dependencies);
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "src/index.ts",
      },
      output: {
        entryFileNames: "index.js",
        format: "cjs",
      },
      external: getExternalModules(),
    },
  },
});
