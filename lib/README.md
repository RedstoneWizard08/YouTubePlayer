# YouTubePlayer
A terrible clone of the YouTube video player.

## Installation

1. Create a `.npmrc` file in your project with this inside of it:
```npmrc
@redstonewizard08:registry=https://npm.pkg.github.com
```
2. Install the package:
```sh
npm install @redstonewizard08/youtube-player
```

## Usage

1. Import the library.
```ts
// Note: Remember to import the stylesheet!
import "@redstonewizard08/youtube-player/dist/esm/index.css";

// Import the YouTubePlayer utility class.
import YouTubePlayer from "@redstonewizard08/youtube-player";
```
2. Create a player instance.
```ts
const videos: VideoData[] = [
    {
        album: "Stardew Valley - Roguelike Mod OST",
        artist: "Therm",
        title: "Hold Your Ground",

        // Note: These work with Data URIs!
        poster: "./assets/Hold Your Ground.png",
        source: "./assets/Hold Your Ground.mp4",
    },
];

YouTubePlayer.createPlaylistPlayer(videos);
```
