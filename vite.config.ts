import { defineConfig } from "vite";

export default defineConfig({
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
    },

    base: "./",
});
