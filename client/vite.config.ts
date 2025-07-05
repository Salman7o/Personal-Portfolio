import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const plugins = [react()];

// Only load Replit plugins if available
if (process.env.NODE_ENV !== "production") {
  try {
    const runtimeErrorOverlay = require("@replit/vite-plugin-runtime-error-modal");
    plugins.push(runtimeErrorOverlay());
  } catch (e) {
    console.warn("Skipping Replit runtime error overlay plugin:", e.message);
  }

  try {
    if (process.env.REPL_ID !== undefined) {
      const cartographer = require("@replit/vite-plugin-cartographer");
      plugins.push(cartographer.cartographer());
    }
  } catch (e) {
    console.warn("Skipping Replit cartographer plugin:", e.message);
  }
}

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "../dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
