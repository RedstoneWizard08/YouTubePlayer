import * as React from "react";
import Layout from "@theme/Layout";

import YouTubePlayer, { type VideoData } from "../../..";
import { hyg } from "../../../src/videos";

import styles from "./demo.module.css";

export const Hello = () => {
    const container = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
        const videos: VideoData[] = [
            {
                album: "Stardew Valley - Roguelike Mod OST",
                artist: "Therm",
                title: "Hold Your Ground",
    
                poster: hyg.poster,
                source: hyg.video,
            },
        ];
    
        YouTubePlayer.createPlaylistPlayer(videos, container.current);
    });

    return (
        <Layout title="Demo" description="Demo of the library">
            <main>
                <div ref={container} className={styles.demo} />
            </main>
        </Layout>
    );
};

export default Hello;
