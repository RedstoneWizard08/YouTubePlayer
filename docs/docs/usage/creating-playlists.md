---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating playlists

To use the library, use this code:

<Tabs groupId="language-formats">
  <TabItem value="cjs" label="CommonJS Modules" default>

```js
// Import the library
const YouTubePlayer = require("@redstonewizard08/youtube-player");

// Most build tools will allow you to import assets directly
// as URLs (e.g. Vite, or Webpack with plugins, also rollup),
// but if that fails, you can just provide a URL (relative or
// non-relative). YouTube Player also supports Data URIs.
const poster = require("../public/assets/hold_your_ground.png");
const video = require("../public/assets/hold_your_ground.mp4");

// On window load, create our player.
window.addEventListener("load", () => {
    // Define the videos.
    /** @type {import("@redstonewizard08/youtube-player").VideoData[]} */
    const videos = [
        {
            album: "Stardew Valley - Roguelike Mod OST",
            artist: "Therm",
            title: "Hold Your Ground",

            poster: poster,
            source: video,
        },

        // Add more videos using the format above.
    ];

    // Create the player instance.
    const player = YouTubePlayer.createPlaylistPlayer(videos);
});
```
  </TabItem>
  <TabItem value="esm" label="ES Modules">

```ts
// Import the library
import YouTubePlayer from "@redstonewizard08/youtube-player";

// Most build tools will allow you to import assets directly
// as URLs (e.g. Vite, or Webpack with plugins, also rollup),
// but if that fails, you can just provide a URL (relative or
// non-relative). YouTube Player also supports Data URIs.
import poster from "../public/assets/hold_your_ground.png";
import video from "../public/assets/hold_your_ground.mp4";

// On window load, create our player.
window.addEventListener("load", () => {
    // Define the videos.
    /** @type {import("@redstonewizard08/youtube-player").VideoData[]} */
    const videos = [
        {
            album: "Stardew Valley - Roguelike Mod OST",
            artist: "Therm",
            title: "Hold Your Ground",

            poster: poster,
            source: video,
        },

        // Add more videos using the format above.
    ];

    // Create the player instance.
    const player = YouTubePlayer.createPlaylistPlayer(videos);
});
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

```ts
// Import the library
import YouTubePlayer, { type VideoData } from "@redstonewizard08/youtube-player";

// Most build tools will allow you to import assets directly
// as URLs (e.g. Vite, or Webpack with plugins, also rollup),
// but if that fails, you can just provide a URL (relative or
// non-relative). YouTube Player also supports Data URIs.
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

        // Add more videos using the format above.
    ];

    // Create the player instance.
    const player = YouTubePlayer.createPlaylistPlayer(videos);
});
```
  </TabItem>
</Tabs>
