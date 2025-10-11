import { useState } from "react";
import useSound from "use-sound";
import "../css/audioplayer.css";
import axios from "axios";

export function LibraryButton({ soundUrl, soundName }: any) {
  const customSound = "/sounds/notification.mp3";
  const stop = useSound(customSound);

  /* to do: create a user store */

  /* Add to user library any time the button is clicked */

  return (
    <div>
      <a href={soundUrl} download={soundName}>
        <button className="button">
          <img src={require(`../theme/libraryAdd.png`)} className="icon" />
        </button>
      </a>
    </div>
  );
}

export default LibraryButton;
