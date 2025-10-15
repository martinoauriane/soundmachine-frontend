import React, { useRef, useState } from "react";
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

  const trackListRef = useRef<HTMLDivElement | null>(null);

  const horizonatalSoundList = soundsArray.map((sound, idx) => {
    const key = (sound as any).id ?? `${sound.name}-${idx}`;
    return (
      <div className="sound" key={key}>
        <SoundBox trackName={sound.name} trackUrl={sound.url} />
      </div>
    );
  });

  const scroll = (dir: "left" | "right") => {
    const el = trackListRef.current;
    if (!el) return;
    const amt = Math.floor(el.clientWidth * 0.6);
    el.scrollBy({ left: dir === "left" ? -amt : amt, behavior: "smooth" });
  };

  return (
    <div className="most-popular-sounds">
      <p className="title"> Most popular sounds this week </p>

      <div className="mps-content">
        <button className="mps-arrow left" onClick={() => scroll("left")}>
          <img src="/theme/left-arrow.png" alt="left" />
        </button>

        <div className="body">
          <div className="sound-box-list" ref={trackListRef}>
            {horizonatalSoundList}
          </div>
        </div>

        <button className="mps-arrow right" onClick={() => scroll("right")}>
          <img src="/theme/right-arrow.png" alt="right" />
        </button>
      </div>
    </div>
  );
}

export default MostPopularSoundsComponent;
