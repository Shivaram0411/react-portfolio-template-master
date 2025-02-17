import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Ensures Vite builds to the correct directory
    target: "esnext",
  },
  server: {
    port: 3000,
  },
});
