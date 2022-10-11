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
