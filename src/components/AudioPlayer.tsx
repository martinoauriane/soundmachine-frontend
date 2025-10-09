import React from "react";

// components
import PlayButton from "./playButton";
import DownloadButton from "./DownloadButton";
import { useSound } from "react-sounds";

function SoundPlayer() {
  return (
    <div className="audio-container">
      <p> sound name </p>
      <PlayButton />
      <DownloadButton />
    </div>
  );
}

export default SoundPlayer;
