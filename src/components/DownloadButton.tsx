import { useState } from "react";
import useSound from "use-sound";
import "../css/audioplayer.css";
import axios from "axios";

export function DownloadButton() {
  const customSound = "/sounds/notification.mp3";
  const stop = useSound(customSound);

  return (
    <div>
      <a href="/sounds/merry-christmas-sounds.mp3" download="christmas_sound">
        <button className="button">
          <img src={require(`../theme/download.png`)} className="icon" />
        </button>
      </a>
    </div>
  );
}

export default DownloadButton;
