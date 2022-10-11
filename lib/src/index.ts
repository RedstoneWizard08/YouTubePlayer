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
export class YouTubePlayer {
    public static createPlayer(source: VideoData, metadata: PlayerMetadata) {
        return new YouTubeMediaPlayer(source, metadata);
    }

    public static createPlaylistPlayer(sources: VideoData[]) {
        return new PlaylistPlayer(sources);
    }
}

// Export everything.
export * from "./types";
export * from "./player";
export * from "./playlist";

// Export the default utility.
export default YouTubePlayer;
