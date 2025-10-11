import React, { useState, useEffect } from "react";
//libraries
import useSound from "use-sound";
// components
import PlayButton from "./playButton";
import Spacer from "./spacer";
import DownloadButton from "./DownloadButton";
//style
import "../css/audioplayer.css";

const TrackPlayer = ({ trackUrl }: any) => {
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

  // Updates sound progression bar
  useEffect(() => {
    if (sound) {
      /* Checks if objet sound created by useSounds exists. */
      const interval = setInterval(() => {
        /* this creates a timeInterval which will execute the function every  200ms*/
        const cursorPosition = sound.seek() || 0;
        /* seek() gives the sound current position in seconds */
        const soundTimeLength =
          sound.duration() ??
          0; /* sound.duration corresponds to sound total duration in seconds. */
        setSoundPosition(cursorPosition);
        setSoundDuration(soundTimeLength);
      }, 200); /* 200 indicates the function will be called every 200ms */
      return () => clearInterval(interval);
    }
  }, [sound]);

  // Clique sur la barre de progression
  const onProgressBarClick = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const newTime = (e.target.value / 100) * soundDuration;
    sound?.seek(
      newTime
    ); /* once user has clicked on the soundBar, we seek this new time in the sound, then assign it to a new position */
    setSoundPosition(newTime);
  };

  const handlePause = () => {
    const pausedCursorPosition = sound.seek();
    console.log("paused position", pausedCursorPosition);
    setSoundPosition(pausedCursorPosition);
    console.log("Pause appuyé, position du curseur sauvegardée");
  };

  return (
    <div className="audio-container">
      <p className="sound-name">Merry Christmas 🎵</p>
      <Spacer />
      <PlayButton
        play={play}
        pause={pause}
        isPlaying={isPlaying}
        action={handlePause}
      />
      <div className="progressBar">
        <input
          type="range"
          min="0"
          max="100"
          value={soundDuration ? (soundPosition / soundDuration) * 100 : 0}
          onChange={onProgressBarClick}
          className="progress-bar"
        />
        <span className="time">
          {Math.floor(soundPosition)}s / {Math.floor(soundDuration)}s
        </span>
      </div>
      <DownloadButton />
    </div>
  );
};

export default TrackPlayer;
