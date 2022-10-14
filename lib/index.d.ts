import { PlayerMetadata, VideoData } from "./types";
import { YouTubeMediaPlayer } from "./player";
import { PlaylistPlayer } from "./playlist";
declare class YouTubePlayer {
    static createPlayer(source: VideoData, metadata: PlayerMetadata): YouTubeMediaPlayer;
    static createPlaylistPlayer(sources: VideoData[]): PlaylistPlayer;
}
export * from "./types";
export default YouTubePlayer;
