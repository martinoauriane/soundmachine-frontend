import React, { useState, useEffect } from "react";

//libraries
import useSound from "use-sound";

// components
import PlayButton from "./playButton";
import Spacer from "./spacer";

//utils
import { soundsArray } from "../utils";

//style
import "../css/audioplayer.css";
import "../css/boxplayer.css";

const SoundBox = ({ trackUrl, trackName }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // useSound returns
  // A play() function (pour start sound listenning),
  // An object containing tools (pause, stop, isPlaying, etc.),
  // sound: an object created
  const [play, { pause, stop, sound }] = useSound(trackUrl, {
    volume: 0.8,
    loop: true,
    onplay: () => setIsPlaying(true),
    onpause: () => setIsPlaying(false),
    onstop: () => setIsPlaying(false),
    onend: () => setIsPlaying(false),
  });

  const [soundPosition, setSoundPosition] = useState(0);
  const [soundDuration, setSoundDuration] = useState(0);

  const handlePause = () => {
    const pausedCursorPosition = sound.seek();
    setSoundPosition(pausedCursorPosition);
  };

  return (
    <div className="box-player-container">
      <PlayButton
        play={play}
        pause={pause}
        isPlaying={isPlaying}
        action={handlePause}
        style="button-box"
      />
      <p className="sound-name"> {trackName} </p>
    </div>
  );
};

export default SoundBox;
