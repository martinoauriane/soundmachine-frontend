import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//components
import SearchBar from "../components/InputSearch";
import BrowseByCategories from "../components/BrowseByCategoriesComponent";
import TrackPlayer from "../components/TrackPlayer";
import Navbar from "../components/Navbar";

// utils
import { Song } from "../utils";
import { soundsArray } from "../utils";

//style
import "../css/navbar.css";
import "../css/home-page.css";

function BrowseScreen() {
  const [tracksArray, setTracksArray] = useState<Song[]>();

  useEffect(() => {
    setTracksArray(soundsArray);
  }, []);

  const filterList = (list: Song[], category: string) => {
    return list.filter((song) => song.type === category);
  };

  const updateTracksList = (category: string) => {
    const tracks = filterList(soundsArray, category);
    console.log("tracks", tracks);
    setTracksArray(tracks);
  };

  // rendering each sound with TrackPlayer (play/pause)
  const listSounds = tracksArray?.map((sound) => {
    return (
      <div className="rendering-track">
        <TrackPlayer trackName={sound.name} trackUrl={sound.url} />
      </div>
    );
  });
  return (
    <div className="main">
      <Navbar />
      {/* CATEGORIES */}
      <BrowseByCategories onSelect={updateTracksList} />

      {/* TRACKS */}
      <div className="widgets">{listSounds}</div>
    </div>
  );
}
export default BrowseScreen;
