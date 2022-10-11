import { PlaylistPlayer } from "./playlist";
import { PlayerMetadata, SourceInfo, VideoData } from "./types";

export class YouTubeMediaPlayer extends EventTarget {
    private element?: HTMLVideoElement;
    private loop?: boolean;
    private autoPlay?: boolean;
    private sources?: SourceInfo[];
    private duration?: number;
    private showPoster?: boolean;
    private buttons?: { [key: string]: HTMLButtonElement };

    private source: VideoData;
    private progress?: HTMLInputElement;
    private timer?: NodeJS.Timer;
    private interval?: NodeJS.Timer;
    private poster?: string;
    private container?: HTMLDivElement;
    private video?: HTMLVideoElement;
    private controls?: HTMLDivElement;
    private timerInfo?: HTMLParagraphElement;
    private title?: HTMLParagraphElement;
    private changePlayVideo?: boolean;

    private metadata: PlayerMetadata;
    public playlist?: PlaylistPlayer;

    public constructor(
        source: VideoData,
        metadata: PlayerMetadata,
        playlist?: PlaylistPlayer
    ) {
        super();

        this.source = source;
        this.metadata = metadata;
        this.playlist = playlist;

        this.init(false);
    }

    public async setVideo(data: VideoData, play?: boolean) {
        this.element = document.createElement("video");
        const source = document.createElement("source");

        this.element.style.display = "none";

        source.src = data.source;
        this.element.poster = data.poster;

        const promise = new Promise((resolve) =>
            this.element?.addEventListener("canplay", resolve)
        );

        this.element.appendChild(source);
        this.container?.appendChild(this.element);

        await promise;

        this.loop = false;
        this.autoPlay = false;
        this.changePlayVideo =
            play === undefined || play === null ? true : play;

        this.sources = [];
        this.duration = 0;
        this.showPoster = false;
        this.buttons = {};

        this.metadata = data;
        this.source = data;

        this.addEventListener("ready", this.onChangeReady.bind(this));

        this.init(true);
    }

    private onChangeReady() {
        this.removeEventListener("ready", this.onChangeReady.bind(this));

        this.setupMetadata();

        if (this.changePlayVideo) this.play();
    }

    private async init(skip?: boolean) {
        this.element = document.createElement("video");
        const source = document.createElement("source");

        source.src = this.source.source;
        this.element.poster = this.source.poster;
        this.element.style.display = "none";

        const promise = new Promise((resolve) =>
            this.element?.addEventListener("canplay", resolve)
        );

        this.element.appendChild(source);
        document.body.appendChild(this.element);

        await promise;

        this.loop = false;
        this.autoPlay = false;

        this.sources = [];
        this.duration = this.element.duration;
        this.showPoster = false;
        this.buttons = {};

        // Get our source elements.
        const sourceElements = this.element.getElementsByTagName("source");
        const sources: SourceInfo[] = [];

        // Get all the sources and re-format them.
        for (let i = 0; i < sourceElements.length; i++) {
            sources.push({
                type:
                    sourceElements[i].type ||
                    this.getSourceType(sourceElements[i].src),
                source: sourceElements[i].src,
            });
        }

        // Make it accessable.
        this.sources = sources;

        // Get our poster.
        this.poster = this.element.poster;

        // Get the duration.
        this.duration = this.element.duration;

        // Hide the original player (temporarily).
        this.element.style.display = "none";

        // Render our player.
        this.render(skip);
    }

    private render(skip?: boolean) {
        // Get the old video and controls if they exist.
        const oldVideo = this.video;
        const oldControls = this.controls;

        // Set up the container, video element, and the controls container.
        if (!skip) this.container = document.createElement("div");

        this.controls = document.createElement("div");
        this.video = document.createElement("video");

        // Set their class names.
        this.container!.className =
            "youtube-player" + (this.playlist ? " as-playlist" : "");
        this.controls!.className =
            "youtube-player-controls" + (this.playlist ? " as-playlist" : "");
        this.video!.className = "youtube-player-poster";

        // If we have a poster, apply it.
        if (this.poster) this.video!.poster = this.poster;

        // Set the default settings.
        this.video!.volume = 1;
        this.showPoster = true;

        // Create the source elements from the original video.
        const sources = this.createSources();

        // Remove all previous sources.
        const originalSources = this.video!.getElementsByTagName("source");
        for (let i = 0; i < originalSources.length; i++)
            originalSources[i].remove();

        // Apply them to our video.
        for (const source of sources) this.video!.appendChild(source);

        // Initialize the title.
        this.createTitle();

        // Initialize our controls.
        this.createControls();

        // Append all the children.
        if (oldVideo) this.container!.replaceChild(this.video!, oldVideo);
        else this.container!.appendChild(this.video!);

        if (oldControls)
            this.container!.replaceChild(this.controls!, oldControls);
        else this.container!.appendChild(this.controls!);

        // Insert our player.
        if (!skip) document.body.insertBefore(this.container!, this.element!);

        // Remove the old player.
        this.element?.remove();

        // Attach our events.
        this.attachEvents();

        // Setup metadata.
        this.setupMetadata();

        // Setup the timer.
        this.resetControlsTimer();

        // Auto-play.
        this.triggerAutoPlay();

        this.dispatchEvent(new Event("ready"));
    }

    private createTitle() {
        if (this.title) this.title.remove();

        this.title = document.createElement("p");

        this.title.className = "youtube-player-title";

        this.title.innerHTML = `${this.metadata.title} - ${this.metadata.artist}`;

        this.container?.prepend(this.title);
    }

    private createControls() {
        // Create our controls' elements.
        const play = document.createElement("button");
        const volume = document.createElement("button");
        const progress = document.createElement("input");
        const fullscreen = document.createElement("button");
        const pictureInPicture = document.createElement("button");

        // Create our timer.
        const timer = document.createElement("p");

        // Set their class names.
        play.className = "youtube-player-button youtube-player-play";
        volume.className = "youtube-player-button youtube-player-volume";
        progress.className = "youtube-player-progress";
        fullscreen.className =
            "youtube-player-button youtube-player-fullscreen";
        pictureInPicture.className = "youtube-player-button youtube-player-pip";
        timer.className = "youtube-player-time";

        // Append them to our controls.
        this.controls?.appendChild(play);
        this.controls?.appendChild(volume);
        this.controls?.appendChild(progress);
        this.controls?.appendChild(timer);
        this.controls?.appendChild(pictureInPicture);
        this.controls?.appendChild(fullscreen);

        // Configure the types.
        play.type = "button";
        volume.type = "button";
        fullscreen.type = "button";
        pictureInPicture.type = "button";
        progress.type = "range";

        // Set up the progress bar.
        progress.min = "0";
        progress.max = (this.duration || 0).toString();
        progress.value = "0";
        progress.step = "0.000001";

        // Set their text.
        pictureInPicture.innerHTML = `<i class="fa-solid fa-up-right-from-square"></i>`;
        fullscreen.innerHTML = `<i class="fa-solid fa-expand"></i>`;
        play.innerHTML = `<i class="fa-solid fa-play"></i>`;
        volume.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
        timer.innerHTML = `-${this.getFormattedDuration()}`;

        // Make them accessable.

        this.buttons = {
            play,
            volume,
            fullscreen,
            pictureInPicture,
        };

        this.progress = progress;
        this.timerInfo = timer;
    }

    private getFormattedDuration() {
        const _seconds = (this.duration || 0) - (this.video?.currentTime || 0);
        let hours: string | number = Math.floor(_seconds / 3600);
        let minutes: string | number = Math.floor(
            (_seconds - hours * 3600) / 60
        );
        let seconds: string | number = Math.floor(
            _seconds - hours * 3600 - minutes * 60
        );

        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;

        let result = "";

        if (hours > 0) result += `${hours}:`;

        result += `${minutes}:`;
        result += seconds;

        return result;
    }

    private attachEvents() {
        // Control buttons events.
        this.buttons?.fullscreen.addEventListener(
            "click",
            this.toggleFullscreen.bind(this)
        );
        this.buttons?.pictureInPicture.addEventListener(
            "click",
            this.togglePictureInPicture.bind(this)
        );

        // Play button events.
        this.buttons?.play.addEventListener(
            "click",
            this.togglePlay.bind(this)
        );
        this.buttons?.play.addEventListener(
            "focus",
            this.blurTarget.bind(this)
        );

        // Controls events
        this.controls?.addEventListener(
            "contextmenu",
            this.noopEvent.bind(this)
        );

        // Video events.
        this.video?.addEventListener("timeupdate", this.timeUpdate.bind(this));
        this.video?.addEventListener("ended", this.loopEnded.bind(this));
        this.video?.addEventListener("play", this.onVideoPlay.bind(this));
        this.video?.addEventListener("pause", this.onVideoPause.bind(this));
        this.video?.addEventListener("click", this.togglePlay.bind(this));
        this.video?.addEventListener("contextmenu", this.noopEvent.bind(this));

        this.video?.addEventListener(
            "enterpictureinpicture",
            this.onPictureInPictureActivate.bind(this)
        );

        this.video?.addEventListener(
            "leavepictureinpicture",
            this.onPictureInPictureDeactivate.bind(this)
        );

        // Progress events.
        this.progress?.addEventListener(
            "change",
            this.updateVideoTime.bind(this)
        );

        this.progress?.addEventListener(
            "mousedown",
            this.updateGradient.bind(this)
        );

        this.progress?.addEventListener(
            "mousemove",
            this.updateGradient.bind(this)
        );

        // Keyboard events.
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));

        // Window events.
        window.addEventListener(
            "mousedown",
            this.resetControlsTimer.bind(this)
        );

        window.addEventListener("mouseup", this.resetControlsTimer.bind(this));
        window.addEventListener("click", this.resetControlsTimer.bind(this));

        window.addEventListener(
            "mousemove",
            this.resetControlsTimer.bind(this)
        );

        // Full screen change event.
        document.addEventListener(
            "fullscreenchange",
            this.onFullscreenChange.bind(this)
        );
    }

    private onPictureInPictureActivate() {
        // this.notices.pip = document.createElement("p");
        // this.notices.pip.innerHTML = "Playing Picture-In-Picture";
        // this.notices.pip.className = "youtube-player-pip-info";
        // this.container?.appendChild(this.notices.pip);
    }

    private onPictureInPictureDeactivate() {
        // this.notices.pip.remove();
    }

    private resetControlsTimer() {
        // If the timer exists, clear it.
        if (this.timer) clearTimeout(this.timer);

        // Set a new timeout.
        this.timer = setTimeout(
            (() => {
                if (this.controls) this.controls.style.opacity = "0";
                if (this.title) this.title.style.opacity = "0";
            }).bind(this),
            3000
        );

        // Reset the controls' opacity.
        if (this.controls) this.controls.style.opacity = "1";

        // Reset the title's opacity.
        if (this.title) this.title.style.opacity = "1";
    }

    private setupMetadata() {
        // Check for "mediaSession" in the navigator object.
        if ("mediaSession" in navigator) {
            // Set our metadata!
            navigator.mediaSession.metadata = new MediaMetadata({
                ...this.metadata,
            });

            // Set our action handlers.

            navigator.mediaSession.setActionHandler(
                "play",
                this.play.bind(this)
            );

            navigator.mediaSession.setActionHandler(
                "pause",
                this.pause.bind(this)
            );

            navigator.mediaSession.setActionHandler(
                "stop",
                this.stop.bind(this)
            );

            navigator.mediaSession.setActionHandler(
                "seekforward",
                this.seekForward.bind(this)
            );

            navigator.mediaSession.setActionHandler(
                "seekbackward",
                this.seekBackward.bind(this)
            );

            navigator.mediaSession.setActionHandler(
                "seekto",
                this.seekTo.bind(this)
            );

            if (this.playlist) {
                navigator.mediaSession.setActionHandler(
                    "nexttrack",
                    this.playlist.next.bind(this.playlist)
                );

                navigator.mediaSession.setActionHandler(
                    "previoustrack",
                    this.playlist.previous.bind(this.playlist)
                );
            }
        }
    }

    private seekForward() {
        if (this.video) this.video.currentTime += 5;
    }

    private seekBackward() {
        if (this.video) this.video.currentTime -= 5;
    }

    private seekTo(
        details: Required<Pick<MediaSessionActionDetails, "seekTime">> &
            MediaSessionActionDetails
    ) {
        if (this.video) this.video.currentTime = details.seekTime!;
    }

    private onVideoPlay() {
        if ("mediaSession" in navigator)
            navigator.mediaSession.playbackState = "playing";

        this.createUpdateLoop();
    }

    private onVideoPause() {
        if ("mediaSession" in navigator)
            navigator.mediaSession.playbackState = "paused";

        this.deleteUpdateLoop();
    }

    private stop() {
        this.pause();

        if (this.video) this.video.currentTime = 0;
        if (this.progress) this.progress.value = "0";
    }

    private noopEvent(event: Event) {
        event.preventDefault();
    }

    private blurTarget(event: Event) {
        if (event.target) (event.target as HTMLElement).blur();
    }

    private updateVideoTime() {
        if (this.video)
            this.video.currentTime = parseInt(this.progress?.value || "0");

        if (this.timerInfo)
            this.timerInfo.innerHTML = `-${this.getFormattedDuration()}`;
    }

    private triggerAutoPlay() {
        if (this.autoPlay)
            this.video?.play().then(this.setupMetadata.bind(this));
    }

    private loopEnded() {
        if (this.loop) {
            if (this.video) this.video.currentTime = 0;

            this.video?.play().then(this.setupMetadata.bind(this));
        }

        this.dispatchEvent(new Event("ended"));
    }

    public togglePlay() {
        if (this.video?.paused) this.play();
        else this.pause();

        if (this.video?.paused && this.buttons)
            this.buttons.play.innerHTML = `<i class="fa-solid fa-play"></i>`;
        else {
            if (this.buttons)
                this.buttons.play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        }
    }

    private timeUpdate() {
        if (this.progress)
            this.progress.value = this.video?.currentTime.toString() || "0";

        if (this.video?.paused && this.buttons)
            this.buttons.play.innerHTML = `<i class="fa-solid fa-play"></i>`;
        else {
            if (this.buttons)
                this.buttons.play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        }

        this.updateGradient();

        if (this.timerInfo)
            this.timerInfo.innerHTML = `-${this.getFormattedDuration()}`;
    }

    public play() {
        if (this.showPoster) {
            if (
                (!this.sources || !this.sources[0].type.startsWith("audio/")) &&
                this.video
            )
                this.video.className = "youtube-player-video";

            this.showPoster = false;
        }

        this.video?.play().then(this.setupMetadata.bind(this));
    }

    public pause() {
        this.video?.pause();
    }

    private onKeyDown(event: KeyboardEvent) {
        switch (event.code) {
            case "Space":
                this.togglePlay();
                break;

            case "ArrowLeft":
                if (this.video) this.video.currentTime -= 5;

                break;

            case "ArrowRight":
                if (this.video) this.video.currentTime += 5;

                break;

            case "KeyF":
                this.toggleFullscreen();
                break;

            case "KeyI":
                this.togglePictureInPicture();
                break;
        }

        this.resetControlsTimer();
    }

    private onKeyUp(event: KeyboardEvent) {
        switch (event.code) {
        }

        this.resetControlsTimer();
    }

    private onFullscreenChange() {
        if (!document.fullscreenElement) {
            this.buttons!.fullscreen.innerHTML = `<i class="fa-solid fa-expand"></i>`;

            if (this.playlist) {
                this.container?.classList.add("as-playlist");
                this.controls?.classList.add("as-playlist");
            }
        }

        if (document.fullscreenElement) {
            this.buttons!.fullscreen.innerHTML = `<i class="fa-solid fa-compress"></i>`;

            if (this.playlist) {
                this.container?.classList.remove("as-playlist");
                this.controls?.classList.remove("as-playlist");
            }
        }
    }

    public toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            this.container?.requestFullscreen();
        }
    }

    public togglePictureInPicture() {
        if (document.pictureInPictureElement) document.exitPictureInPicture();
        else this.video?.requestPictureInPicture();
    }

    private createUpdateLoop() {
        if (this.interval) clearInterval(this.interval);

        this.interval = setInterval(this.updateGradient.bind(this), 1);
    }

    private deleteUpdateLoop() {
        if (this.interval) clearInterval(this.interval);
    }

    private createSources() {
        const sources: HTMLSourceElement[] = [];

        this.sources?.forEach((source) => {
            const sourceElement = document.createElement("source");

            sourceElement.src = source.source;
            sourceElement.type = source.type;

            sources.push(sourceElement);
        });

        return sources;
    }

    private getSourceType(src: string) {
        if (src.startsWith("data:")) return src.split(":")[1].split(";")[0];

        const ext = src.split(".")[src.split(".").length - 1].toLowerCase();

        switch (ext) {
            case "ogg":
            case "mp3":
            case "m4a":
                return "audio/" + ext;

            case "mp4":
            case "webm":
                return "video/" + ext;

            default:
                throw new TypeError("Unknown file type!");
        }
    }

    private updateGradient() {
        if (!this.video || !this.progress) return;

        const percentage =
            ((this.video.currentTime - parseInt(this.progress.min || "0")) /
                ((this.duration || 0) - parseInt(this.progress.min || "0"))) *
            100;

        const backgroundImage = `linear-gradient(
            90deg,
            #cc0404 ${percentage}%,
            transparent ${percentage}%
        )`;

        this.progress.style.backgroundImage = backgroundImage;
    }

    public get isFullscreen() {
        return document.fullscreenElement == this.container;
    }

    public get isPictureInPicture() {
        return document.pictureInPictureElement == this.video;
    }

    public get isPlaying() {
        return !this.video?.paused;
    }

    public dispose() {
        this.container?.remove();
    }
}
