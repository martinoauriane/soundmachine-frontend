import { useState } from "react";
import { useSound } from "react-sounds";
import { playSound } from "react-sounds";

export function DownloadButton() {
  const customSound = "/sounds/notification.mp3";
  const stop = useSound(customSound);

  const Download = () => {};

  return (
    <div>
      <button onClick={Download}>
        <img src={require(`../theme/download.png`)} className="icon" />
      </button>
    </div>
  );
}

export default DownloadButton;
