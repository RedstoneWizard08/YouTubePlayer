import { VideoData } from "./types";
export declare class PlaylistPlayer extends EventTarget {
    private videos;
    private currentVideo;
    private player?;
    private container?;
    constructor(videos: VideoData[]);
    private getNextVideo;
    private getItemIcon;
    private renderPlaylist;
    private init;
    next(): Promise<void>;
    previous(): Promise<void>;
    skipTo(index: number): Promise<void>;
}
