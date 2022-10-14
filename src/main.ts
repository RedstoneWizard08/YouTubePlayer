// Styles
import "../lib/styles/index.scss";
import "../lib/styles/playlist.scss";

// Import our videos.
import { hyg } from "./videos";

// Import the player.
import YouTubePlayer, { type VideoData } from "../lib";

window.addEventListener("load", () => {
    const videos: VideoData[] = [
        {
            album: "Stardew Valley - Roguelike Mod OST",
            artist: "Therm",
            title: "Hold Your Ground",

            poster: hyg.poster,
            source: hyg.video,
        },
    ];

    YouTubePlayer.createPlaylistPlayer(videos);
});
