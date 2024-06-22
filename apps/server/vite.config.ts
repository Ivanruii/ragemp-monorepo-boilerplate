import { defineConfig } from "vite";
import { node } from "./plugins/node";

export default defineConfig({
  plugins: [node()],
});
