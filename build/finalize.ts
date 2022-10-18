import fs from "fs";
import path from "path";

export const finalize = () => {
    const distPath = path.join(__dirname, "..", "dist", "web");
    const indexPath = path.join(distPath, "index.html");

    let contents = fs.readFileSync(indexPath).toString("utf-8");

    contents = contents.replace(
        /\<script\s(?:type=\"module\"|crossorigin)\s(?:type=\"module\"|crossorigin)/gm,
        `<script type="text/javascript"`
    );

    fs.writeFileSync(indexPath, contents);
};
