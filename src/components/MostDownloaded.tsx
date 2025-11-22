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

  const horizontalMostDownloaded = tracksArray?.map((sound) => {
    return (
      <div className="sound">
        <SoundBox trackName={sound.name} trackUrl={sound.url} />
      </div>
    );
  });

  return (
    <div className="mostdownloaded-container">
      <p className="title"> My most downloaded sounds </p>
      <div className="download-list">{horizontalMostDownloaded}</div>
    </div>
  );
}
export default MostDownloaded;
