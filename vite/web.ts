import { defineConfig } from "vite";

import css from "vite-plugin-css-injected-by-js";
import path from "path";

export default defineConfig({
    base: "./",
    root: path.join(__dirname, ".."),
    
    server: {
        port: 3000,
        strictPort: true,

        hmr: {
            clientPort: 443,
            port: 3000,
            protocol: "wss",
        },
    },

    build: {
        assetsInlineLimit: 64 * 1024 * 1024,

        minify: "terser",
        sourcemap: true,

        outDir: path.join(__dirname, "..", "dist", "web"),
        emptyOutDir: true,
    },

    plugins: [css()],
});
