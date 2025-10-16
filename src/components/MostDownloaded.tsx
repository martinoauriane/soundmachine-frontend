import { useState, useEffect } from "react";

//components
import TrackPlayer from "../components/TrackPlayer";

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

  const mostDownloaded = soundsArray?.map((sound) => {
    return (
      <div className="space">
        <SoundBox trackName={sound.name} trackUrl={sound.url} />
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
