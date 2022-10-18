import * as vite from "vite";

import webConfig from "../vite/web";
import libraryConfig from "../vite/library";
import { finalize } from "./finalize";
import { zip } from "./zip";

const build = async () => {
    console.log("Building website/demo...");

    await vite.build({
        ...(webConfig as vite.UserConfig),
    });

    console.log("Building library...");

    await vite.build({
        ...(libraryConfig as vite.UserConfig),
    });

    console.log("Finalizing...");

    finalize();

    console.log("Zipping...");

    await zip();
};

build();
