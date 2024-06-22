import path from "path";
import { Plugin } from "vite";
import commonjs from "@rollup/plugin-commonjs";

export function config(options?: { entry?: string }): Plugin {
  const entry = options?.entry ?? "src/index.ts";
  return {
    name: "node-config",
    config() {
      return {
        build: {
          lib: {
            entry: path.resolve(entry),
            formats: ["es"],
            fileName: () => `${path.basename(entry, path.extname(entry))}.js`,
          },
          rollupOptions: {
            plugins: [commonjs()],
            external: ["dependencies-to-exclude"],
            // Additional Rollup options here
          },
        },
        resolve: {
          mainFields: ["module", "jsnext:main", "jsnext"],
          conditions: ["node"],
        },
      };
    },
    apply: "build",
  };
}
