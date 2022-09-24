/** @type {import('vite').Config} */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  build: {
    outDir: "build",
  },
  server: {
    open: true,
    port: 3000,
  },
});
