// Import our stylesheets.
import "./styles/index.scss";
import "./styles/playlist.scss";

// Import Font Awesome stylesheets.
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";

// Import our stuff.
import { PlayerMetadata, VideoData } from "./types";
import { YouTubeMediaPlayer } from "./player";
import { PlaylistPlayer } from "./playlist";

// Create the utility class.
class YouTubePlayer {
    public static createPlayer(source: VideoData, metadata: PlayerMetadata) {
        return new YouTubeMediaPlayer(source, metadata);
    }

    public static createPlaylistPlayer(sources: VideoData[], root?: HTMLElement) {
        return new PlaylistPlayer(sources, root);
    }
}

Object.assign(YouTubePlayer, {
    YouTubeMediaPlayer,
    PlaylistPlayer,
});

// Export the types.
export * from "./types";

// Export the default utility.
export default YouTubePlayer;

// Export the utility.
export { YouTubePlayer };

// Export the classes.
export * from "./player";
export * from "./playlist";
