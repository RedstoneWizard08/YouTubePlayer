import fs from "fs";
import path from "path";

import sass from "esbuild-plugin-sass";
import esbuild from "esbuild";
import autoprefixer from "autoprefixer";

// @ts-ignore
import postcss from "esbuild-plugin-postcss2";

const main = async () => {
    const dist = path.join(__dirname, "dist");
    if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true });

    await esbuild.build({
        bundle: true,
        minify: true,
        sourcemap: true,
        outdir: "dist/cjs",
        format: "cjs",
        entryPoints: ["src/index.ts"],
        plugins: [
            sass(),
            postcss({
                plugins: [autoprefixer],
            }),
        ],
        loader: {
            ".ttf": "dataurl",
            ".woff2": "dataurl",
        },
    });

    await esbuild.build({
        bundle: true,
        minify: true,
        sourcemap: true,
        outdir: "dist/esm",
        format: "esm",
        entryPoints: ["src/index.ts"],
        plugins: [
            sass(),
            postcss({
                plugins: [autoprefixer],
            }),
        ],
        loader: {
            ".ttf": "dataurl",
            ".woff2": "dataurl",
        },
    });

    await esbuild.build({
        bundle: true,
        minify: true,
        sourcemap: true,
        outdir: "dist/iife",
        format: "iife",
        entryPoints: ["src/index.ts"],
        plugins: [
            sass(),
            postcss({
                plugins: [autoprefixer],
            }),
        ],
        loader: {
            ".ttf": "dataurl",
            ".woff2": "dataurl",
        },
    });

    fs.copyFileSync(
        path.join(__dirname, "typings", "index.d.ts"),
        path.join(dist, "cjs", "index.d.ts")
    );

    fs.copyFileSync(
        path.join(__dirname, "typings", "index.d.ts"),
        path.join(dist, "esm", "index.d.ts")
    );

    fs.copyFileSync(
        path.join(__dirname, "typings", "index.d.ts"),
        path.join(dist, "iife", "index.d.ts")
    );
};

main();
