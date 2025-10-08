import { useState } from "react";
import "../css/mostPopularSounds.css";
import "../css/generic.css";

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

  return (
    <div>
      <div className="most-popular-sounds">
        <p className="title"> Most popular sounds this week </p>
        {mostPopularSounds.map((sound) => (
          <li key={sound.id}>{sound.name}</li>
        ))}
      </div>
    </div>
  );
}

export default MostPopularSoundsComponent;
