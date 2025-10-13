import { useState } from "react";
// components
import BoxPlayer from "./BoxPlayer";
// utils
import { soundsArray } from "../utils";
// style
import "../css/mostPopularSounds.css";
import "../css/generic.css";
import { Box } from "@mui/material";

export function MostPopularSoundsComponent() {
  const [inputText, setInputText] = useState("");
  const [sounds, setSounds] = useState([]);
  const [mostPopularSounds, setMostPopularSounds] = useState<Sound[]>([]);

  type Sound = {
    id: number;
    name: string;
    author: string;
    date: string;
  };

  const horizonatalSoundList = soundsArray.map((sound) => {
    return (
      <div className="sound">
        <BoxPlayer trackName={sound.name} trackUrl={sound.url} />
      </div>
    );
  });

  return (
    <div className="most-popular-sounds">
      <p className="title"> Most popular sounds this week </p>
      <div className="body">
        <div className="sound-box-list">{horizonatalSoundList}</div>
      </div>
    </div>
  );
}

export default MostPopularSoundsComponent;
