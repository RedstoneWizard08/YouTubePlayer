export interface SourceInfo {
    type: string;
    source: string;
}

export interface PlayerMetadata {
    title?: string;
    artist?: string;
    album?: string;
    artwork?: MediaImage[];
}

export interface VideoData {
    title: string;
    artist: string;
    album?: string;

    source: string;
    poster: string;
}

export declare class YouTubePlayer {
    public static createPlayer: (
        source: VideoData,
        metadata: PlayerMetadata
    ) => YouTubeMediaPlayer;
    public static createPlaylistPlayer: (
        sources: VideoData[]
    ) => PlaylistPlayer;
}

export declare class PlaylistPlayer extends EventTarget {
    public constructor(videos: VideoData[]);

    public next: () => Promise<void>;
    public previous: () => Promise<void>;
    public skipTo: (index: number) => Promise<void>;
}

export declare class YouTubeMediaPlayer extends EventTarget {
    public playlist?: PlaylistPlayer;

    public constructor(
        source: VideoData,
        metadata: PlayerMetadata,
        playlist?: PlaylistPlayer
    );

    public setVideo: (data: VideoData, play?: boolean) => Promise<void>;
    public play: () => void;
    public pause: () => void;
    public toggleFullscreen: () => void;
    public togglePictureInPicture: () => void;
    public dispose: () => void;

    public isFullscreen: boolean;
    public isPictureInPicture: boolean;
    public isPlaying: boolean;
}

export default YouTubePlayer;
