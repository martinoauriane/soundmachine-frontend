import { useState } from "react";
// components
import SoundBox from "./SoundBox";
// utils
import { soundsArray } from "../utils";
// style
import "../css/mostPopularSounds.css";
import "../css/generic.css";
import { Box } from "@mui/material";
import Spacer from "./spacer";
import ArrowButton from "./ArrowButton";

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
        <SoundBox trackName={sound.name} trackUrl={sound.url} />
      </div>
    );
  });

  return (
    <div className="most-popular-sounds">
      <p className="title"> Most popular sounds this week </p>
      <ArrowButton pic="../../public/theme/left-arrow.png" />
      <ArrowButton pic="./../public/theme/right-arrow.png" />
      <Spacer />
      <div className="body">
        <div className="sound-box-list">{horizonatalSoundList}</div>
      </div>
    </div>
  );
}

export default MostPopularSoundsComponent;
