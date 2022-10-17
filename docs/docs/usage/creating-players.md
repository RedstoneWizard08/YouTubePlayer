---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating players (without playlists)

:::caution

The API for creating players will change soon, and this
will completely remove the metadata (second parameter)
of the `createPlayer()` function, and the metadata will
be auto-generated based on the info provided (first
parameter), since the metadata being supplied is very
repetitive.

:::

To use the library, use this code:

<Tabs groupId="language-formats">
  <TabItem value="cjs" label="CommonJS Modules" default>

```js
// Import the library
const YouTubePlayer = require("youtube-player");

// Most build tools will allow you to import assets directly
// as URLs (e.g. Vite, or Webpack with plugins, also rollup),
// but if that fails, you can just provide a URL (relative or
// non-relative). YouTube Player also supports Data URIs.
const poster = require("../public/assets/hold_your_ground.png");
const video = require("../public/assets/hold_your_ground.mp4");

// On window load, create our player.
window.addEventListener("load", () => {
    // Define the video info.
    /** @type {import("youtube-player").VideoData} */
    const video = {
        album: "Stardew Valley - Roguelike Mod OST",
        artist: "Therm",
        title: "Hold Your Ground",

        poster: poster,
        source: video,
    };

    // Define the metadata.
    /** @type {import("youtube-player").PlayerMetadata} */
    const metadata = {
        album: "Stardew Valley - Roguelike Mod OST",
        artist: "Therm",
        titie: "Hold Your Ground",

        artwork: [
            // ...
        ],
    };

    // Create the player instance.
    const player = YouTubePlayer.createPlayer(video, metadata);
});
```
  </TabItem>
  <TabItem value="esm" label="ES Modules">

```ts
// Import the library
import YouTubePlayer from "youtube-player";

// Most build tools will allow you to import assets directly
// as URLs (e.g. Vite, or Webpack with plugins, also rollup),
// but if that fails, you can just provide a URL (relative or
// non-relative). YouTube Player also supports Data URIs.
import poster from "../public/assets/hold_your_ground.png";
import video from "../public/assets/hold_your_ground.mp4";

// On window load, create our player.
window.addEventListener("load", () => {
    // Define the video info.
    /** @type {import("youtube-player").VideoData} */
    const video = {
        album: "Stardew Valley - Roguelike Mod OST",
        artist: "Therm",
        title: "Hold Your Ground",

        poster: poster,
        source: video,
    };

    // Define the metadata.
    /** @type {import("youtube-player").PlayerMetadata} */
    const metadata = {
        album: "Stardew Valley - Roguelike Mod OST",
        artist: "Therm",
        titie: "Hold Your Ground",

        artwork: [
            // ...
        ],
    };

    // Create the player instance.
    const player = YouTubePlayer.createPlayer(video, metadata);
});
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

```ts
// Import the library
import YouTubePlayer, { type VideoData, type PlayerMetadata } from "youtube-player";

// Most build tools will allow you to import assets directly
// as URLs (e.g. Vite, or Webpack with plugins, also rollup),
// but if that fails, you can just provide a URL (relative or
// non-relative). YouTube Player also supports Data URIs.
import poster from "../public/assets/hold_your_ground.png";
import video from "../public/assets/hold_your_ground.mp4";

// On window load, create our player.
window.addEventListener("load", () => {
    // Define the video info.
    const video: VideoData = {
        album: "Stardew Valley - Roguelike Mod OST",
        artist: "Therm",
        title: "Hold Your Ground",

        poster: poster,
        source: video,
    };

    // Define the metadata.
    const metadata: PlayerMetadata = {
        album: "Stardew Valley - Roguelike Mod OST",
        artist: "Therm",
        titie: "Hold Your Ground",

        artwork: [
            // ...
        ],
    };

    // Create the player instance.
    const player = YouTubePlayer.createPlayer(video, metadata);
});
```
  </TabItem>
</Tabs>
