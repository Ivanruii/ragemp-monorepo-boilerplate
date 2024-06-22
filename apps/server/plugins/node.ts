import { Plugin } from "vite";
import { config } from "./config";

export function node(): Plugin[] {
  return [config()];
}
