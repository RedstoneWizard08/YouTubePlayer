// Styles
import "@redstonewizard08/youtube-player/dist/esm/index.css";

// Import our videos.
import { hyg } from "./videos";

// Import the player.
import YouTubePlayer, { VideoData } from "@redstonewizard08/youtube-player";

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
