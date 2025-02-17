import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for the build
    target: "esnext", // Target modern JavaScript
    minify: "terser", // Minify the output for production
    sourcemap: true, // Generate source maps for debugging
  },
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the app in the browser
  },
  preview: {
    port: 3000, // Preview server port (for `npm run preview`)
  },
  base: "/", // Base public path (useful for GitHub Pages or subpaths)
});
