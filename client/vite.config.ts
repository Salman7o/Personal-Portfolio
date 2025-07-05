import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define plugins array synchronously
const plugins = [react(), runtimeErrorOverlay()];

// Optional Cartographer plugin for Replit (only in dev)
if (
  process.env.NODE_ENV !== "production" &&
  process.env.REPL_ID !== undefined
) {
  try {
    const cartographer = require("@replit/vite-plugin-cartographer");
    plugins.push(cartographer.cartographer());
  } catch (err) {
    console.warn("Optional Replit plugin not loaded:", err);
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
