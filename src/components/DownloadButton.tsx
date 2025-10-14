import { useState } from "react";
import useSound from "use-sound";
import "../css/audioplayer.css";
import axios from "axios";

export function DownloadButton({ soundUrl, soundName }: any) {
  const customSound = "/sounds/notification.mp3";
  const stop = useSound(customSound);

  return (
    <div>
      <a href={soundUrl} download={soundName}>
        <button className="button">
          <img src="../../public/theme/download.png" className="icon" />
        </button>
      </a>
    </div>
  );
}

export default DownloadButton;
