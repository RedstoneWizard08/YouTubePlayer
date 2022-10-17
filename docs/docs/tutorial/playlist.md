---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: Playlist Player

Let's use the YouTube Player in your new project.

## Instantiate the playlist player

```typescript title="/src/main.ts"
// Import the player.
import YouTubePlayer, { type VideoData } from "@redstonewizard08/youtube-player";

// Import our video.
import poster from "../public/assets/hold_your_ground.png";
import video from "../public/assets/hold_your_ground.mp4";

// On window load, create our player.
window.addEventListener("load", () => {
    // Define the videos.
    const videos: VideoData[] = [
        {
            album: "Stardew Valley - Roguelike Mod OST",
            artist: "Therm",
            title: "Hold Your Ground",

            poster: poster,
            source: video,
        },
        // ...
    ];

    // Create the player instance.
    YouTubePlayer.createPlaylistPlayer(videos);
});

```
