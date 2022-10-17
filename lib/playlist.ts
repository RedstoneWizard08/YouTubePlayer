import { YouTubeMediaPlayer } from "./player";
import { PlayerMetadata, VideoData } from "./types";

export class PlaylistPlayer extends EventTarget {
    private videos: VideoData[];
    private currentVideo: number;
    private player?: YouTubeMediaPlayer;
    private container?: HTMLDivElement;
    public root?: HTMLElement;

    public constructor(videos: VideoData[], root?: HTMLElement) {
        super();

        this.root = root;
        this.videos = videos;
        this.currentVideo = 0;

        this.init();
    }

    private getNextVideo() {
        if (this.currentVideo + 1 >= this.videos.length) return 0;
        else return this.currentVideo + 1;
    }

    private getItemIcon(index: number) {
        if (index != this.currentVideo && index != this.getNextVideo())
            return null;

        const status = document.createElement("i");
        status.className = `fa-solid fa-${
            index == this.currentVideo ? "play" : "forward-step"
        }`;

        return status;
    }

    private renderPlaylist() {
        if (this.container) this.container.remove();

        this.container = document.createElement("div");
        this.container.className = "youtube-playlist";

        for (let i = 0; i < this.videos.length; i++) {
            const video = this.videos[i];

            const element = document.createElement("div");
            const thumbnail = document.createElement("img");
            const info = document.createElement("div");
            const title = document.createElement("p");
            const author = document.createElement("p");
            const status = this.getItemIcon(i);

            element.className = `youtube-playlist-item${
                i == this.currentVideo ? " current" : ""
            }`;
            thumbnail.className = "thumbnail";
            info.className = "info";

            thumbnail.src = video.poster;

            title.innerHTML = video.title;
            author.innerHTML = video.artist;

            info.appendChild(title);
            info.appendChild(author);

            element.appendChild(thumbnail);
            element.appendChild(info);
            if (status) element.appendChild(status);

            element.addEventListener(
                "click",
                (() => this.skipTo(i)).bind(this)
            );

            this.container.appendChild(element);
        }

        if (this.root) this.root.prepend(this.container);
        else document.body.prepend(this.container);
    }

    private async init() {
        const metadata: PlayerMetadata = {
            ...this.videos[this.currentVideo],
            album: this.videos[this.currentVideo].album || "Unknown Album",
            artist: this.videos[this.currentVideo].artist || "Unknown Author",
            title: this.videos[this.currentVideo].title || "Unknown",

            artwork: [
                {
                    src: this.videos[this.currentVideo].poster,
                    type: "image/png",
                },
            ],
        };

        this.player = new YouTubeMediaPlayer(
            this.videos[this.currentVideo],
            metadata,
            this
        );
        this.player.addEventListener("ended", this.next.bind(this));

        this.renderPlaylist();

        this.dispatchEvent(new Event("ready"));
    }

    public async next() {
        if (this.currentVideo == this.videos.length - 1) this.currentVideo = 0;
        else this.currentVideo++;

        await this.player?.setVideo(this.videos[this.currentVideo]);

        this.renderPlaylist();
    }

    public async previous() {
        if (this.currentVideo == 0) this.currentVideo = this.videos.length - 1;
        else this.currentVideo--;

        await this.player?.setVideo(this.videos[this.currentVideo]);

        this.renderPlaylist();
    }

    public async skipTo(index: number) {
        if (index >= this.videos.length || index < 0) return;

        this.currentVideo = index;
        await this.player?.setVideo(
            this.videos[this.currentVideo],
            this.player?.isPlaying || false
        );

        this.renderPlaylist();
    }
}
