import { useState, useEffect } from "react";
// utils
import { Song } from "../utils";
import { soundsArray } from "../utils";
//style
import "../css/navbar.css";
import "../css/home-page.css";
import "../css/mostdownloaded.css";
import "../css/generic.css";
import SoundBox from "./SoundBox";

function MostDownloaded() {
  const [tracksArray, setTracksArray] = useState<Song[]>();

  useEffect(() => {
    setTracksArray(soundsArray);
  }, [soundsArray]);

  const mostDownloaded = tracksArray?.map((sound) => {
    return (
      <div className="space">
        <SoundBox trackName={sound.name} trackUrl={sound.url} />
        <p> 33 listening</p>
      </div>
    );
  });

  return (
    <div className="container">
      <p className="balise"> My most downloaded sounds </p>
      {mostDownloaded}
    </div>
  );
}
export default MostDownloaded;
