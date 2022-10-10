// Import our stylesheet.
import "./styles/index.scss";

// Import Font Awesome stylesheets.
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";

// Import our player.
import { YouTubePlayer } from "./player";
import { PlayerMetadata } from "./types";

// Import our video and poster.
import video from "./assets/Hold Your Ground.mp4";
import poster from "./assets/Hold Your Ground.png";

window.addEventListener("load", () => {
    const playerElement = document.createElement("video");

    playerElement.id = "player";
    playerElement.poster = poster;

    const source = document.createElement("source");

    source.src = video;
    source.type = "video/mp4";

    const meta: PlayerMetadata = {
        album: "Stardew Valley - Roguelike Mod OST",
        artist: "Therm",
        title: "Hold Your Ground",
    };

    playerElement.addEventListener(
        "canplay",
        () => new YouTubePlayer(playerElement, meta)
    );

    playerElement.appendChild(source);
    document.body.appendChild(playerElement);
});
