import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: 3000,
        strictPort: true,

        hmr: {
            clientPort: 443,
            port: 3000,
            protocol: "wss",
            host: "redstonewizard08-youtubeplayer-qgrx4x6wg5j34gr-3000.githubpreview.dev",
        },
    },

    build: {
        assetsInlineLimit: 64 * 1024 * 1024,

        rollupOptions: {
            output: {
                sourcemap: true,
                format: "cjs",
            },
        },
    },

    base: "./",
});
