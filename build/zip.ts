import fs from "fs";
import path from "path";
import AdmZip from "adm-zip";

export const getTimestamp = () => {
    const date = new Date();
    
    return `${date.getFullYear()}_${date.getMonth()}_${
        date.getDate()
    }-${date.getHours()}_${date.getMinutes()}_${
        date.getSeconds()
    }_${date.getMilliseconds()}`;
};

export const zip = async () => {
    const out = path.join(__dirname, "..", "out");
    const folder = path.join(__dirname, "..", "dist");
    const zipName = path.join(out, `dist-${getTimestamp()}.zip`);

    if (!fs.existsSync(out)) fs.mkdirSync(out);

    const zip = new AdmZip();

    await zip.addLocalFolderPromise(folder, {});

    await zip.writeZipPromise(zipName);
};
