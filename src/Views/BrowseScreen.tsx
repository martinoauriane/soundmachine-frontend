import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//components
import SearchBar from "../components/InputSearch";
import BrowseByCategories from "../components/BrowseByCategoriesComponent";
import TrackPlayer from "../components/TrackPlayer";

// utils
import { Song } from "../utils";
import { soundsArray } from "../utils";

//style
import "../css/navbar.css";
import "../css/widgets.css";

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

  const listSounds = tracksArray?.map((sound) => {
    return (
      <div className="rendering-track">
        <TrackPlayer trackName={sound.name} trackUrl={sound.url} />
      </div>
    );
  });
  return (
    <div className="main">
      <div className="nav-bar">
        <img
          className="soundmachine-logo"
          src={require(`../theme/soundmachine.png`)}
          alt="sun"
          style={{
            visibility: "visible",
          }}
        />
        <SearchBar />
        <NavLink to="/" className="navBarTitles">
          Home
        </NavLink>
        <NavLink to="/browseSounds" className="navBarTitles">
          Browse sounds
        </NavLink>
        <NavLink to="/browseSounds"> My library </NavLink>
        <NavLink to="/browseSounds"> Settings </NavLink>
      </div>
      <BrowseByCategories onSelect={updateTracksList} />
      <div>{listSounds}</div>
    </div>
  );
}
export default BrowseScreen;
