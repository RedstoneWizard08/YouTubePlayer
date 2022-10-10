import { PlayerMetadata, SourceInfo } from "./types";

export class YouTubePlayer {
    private element: HTMLVideoElement | HTMLAudioElement;
    private loop: boolean;
    private autoPlay: boolean;
    private sources: SourceInfo[];
    private duration: number;
    private showPoster: boolean;
    private buttons: { [key: string]: HTMLButtonElement };

    private progress?: HTMLInputElement;
    private timer?: NodeJS.Timer;
    private interval?: NodeJS.Timer;
    private poster?: string;
    private container?: HTMLDivElement;
    private video?: HTMLVideoElement;
    private controls?: HTMLDivElement;

    private metadata: PlayerMetadata;

    public constructor(
        element: HTMLElement | string,
        metadata: PlayerMetadata
    ) {
        this.element =
            element instanceof HTMLVideoElement ||
            element instanceof HTMLAudioElement
                ? element
                : document.querySelector(element as string)!;

        this.loop = true;
        this.autoPlay = false;

        this.sources = [];
        this.duration = 0;
        this.showPoster = false;
        this.buttons = {};

        this.metadata = metadata;

        this.init();
    }

    private init() {
        // Get our source elements.
        const sourceElements = this.element.querySelectorAll("source");
        const sources: SourceInfo[] = [];

        // Get all the sources and re-format them.
        sourceElements.forEach((source) =>
            sources.push({
                type: source.type || this.getSourceType(source.src),
                source: source.src,
            })
        );

        // Make it accessable.
        this.sources = sources;

        // Get our poster.
        if (this.element instanceof HTMLVideoElement)
            this.poster = this.element.poster;

        // Get the duration.
        this.duration = this.element.duration;

        // Hide the original player (temporarily).
        this.element.style.display = "none";

        // Render our player.
        this.render();
    }

    private render() {
        // Set up the container, video element, and the controls container.
        this.container = document.createElement("div");
        this.video = document.createElement("video");
        this.controls = document.createElement("div");

        // Set their class names.
        this.container.className = "youtube-player";
        this.controls.className = "youtube-player-controls";
        this.video.className = "youtube-player-poster";

        // If we have a poster, apply it.
        if (this.poster) this.video.poster = this.poster;

        // Set the default settings.
        this.video.volume = 1;
        this.showPoster = true;

        // Create the source elements from the original video.
        const sources = this.createSources();

        // Apply them to our video.
        for (const source of sources) this.video.appendChild(source);

        // Initialize our controls.
        this.createControls();

        // Append all the children.
        this.container.appendChild(this.video);
        this.container.appendChild(this.controls);

        // Insert our player.
        document.body.insertBefore(this.container, this.element);

        // Remove the old player.
        this.element.remove();

        // Attach our events.
        this.attachEvents();

        // Setup metadata.
        this.setupMetadata();

        // Setup the timer.
        this.resetControlsTimer();

        // Auto-play.
        this.triggerAutoPlay();
    }

    private createControls() {
        // Create our controls' elements.
        const play = document.createElement("button");
        const volume = document.createElement("button");
        const progress = document.createElement("input");
        const fullscreen = document.createElement("button");
        const pictureInPicture = document.createElement("button");

        // Set their class names.
        play.className = "youtube-player-button youtube-player-play";
        volume.className = "youtube-player-button youtube-player-volume";
        progress.className = "youtube-player-progress";
        fullscreen.className =
            "youtube-player-button youtube-player-fullscreen";
        pictureInPicture.className = "youtube-player-button youtube-player-pip";

        // Append them to our controls.
        this.controls?.appendChild(play);
        this.controls?.appendChild(volume);
        this.controls?.appendChild(progress);
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
        progress.max = this.duration.toString();
        progress.value = "0";
        progress.step = "0.000001";

        // Set their text.
        pictureInPicture.innerHTML = `<i class="fa-solid fa-up-right-from-square"></i>`;
        fullscreen.innerHTML = `<i class="fa-solid fa-expand"></i>`;
        play.innerHTML = `<i class="fa-solid fa-play"></i>`;
        volume.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;

        // Make them accessable.

        this.buttons = {
            play,
            volume,
            fullscreen,
            pictureInPicture,
        };

        this.progress = progress;
    }

    private attachEvents() {
        // Control buttons events.
        this.buttons?.fullscreen.addEventListener(
            "click",
            this.toggleFullscreen.bind(this)
        );
        this.buttons?.pictureInPicture.addEventListener(
            "click",
            this.requestPictureInPicture.bind(this)
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
    }

    private resetControlsTimer() {
        // If the timer exists, clear it.
        if (this.timer) clearTimeout(this.timer);

        // Set a new timeout.
        this.timer = setTimeout(
            (() => {
                if (this.controls) this.controls.style.opacity = "0";
            }).bind(this),
            3000
        );

        // Reset the controls' opacity.
        if (this.controls) this.controls.style.opacity = "1";
    }

    private setupMetadata() {
        // Check for "mediaSession" in the navigator object.
        if ("mediaSession" in navigator) {
            // Set our metadata!
            navigator.mediaSession.metadata = new MediaMetadata({
                ...this.metadata,
                artwork: [
                    {
                        src: this.poster!,
                        type: "image/png",
                        sizes: "1920x1080",
                    },
                ],
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
                this.requestPictureInPicture();
                break;
        }

        this.resetControlsTimer();
    }

    private onKeyUp(event: KeyboardEvent) {
        switch (event.code) {
        }

        this.resetControlsTimer();
    }

    private toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen().then(
                (() => {
                    if (!document.fullscreenElement)
                        this.buttons.fullscreen.innerHTML = `<i class="fa-solid fa-expand"></i>`;
                }).bind(this)
            );
        } else {
            this.container?.requestFullscreen().then(
                (() => {
                    if (document.fullscreenElement)
                        this.buttons.fullscreen.innerHTML = `<i class="fa-solid fa-compress"></i>`;
                }).bind(this)
            );
        }
    }

    private requestPictureInPicture() {
        this.video?.requestPictureInPicture();
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
                (this.duration - parseInt(this.progress.min || "0"))) *
            100;

        const backgroundImage = `linear-gradient(
            90deg,
            #cc0404 ${percentage}%,
            transparent ${percentage}%
        )`;

        this.progress.style.backgroundImage = backgroundImage;
    }
}
