import React from "react";

// components
import PlayButton from "./playButton";
import DownloadButton from "./DownloadButton";
import { useSound } from "react-sounds";
import Spacer from "./spacer";

function SoundPlayer() {
  return (
    <div className="audio-container">
      <p className="sound-name"> sound name </p>
      <Spacer />
      <PlayButton />
      <DownloadButton />
    </div>
  );
}

export default SoundPlayer;
