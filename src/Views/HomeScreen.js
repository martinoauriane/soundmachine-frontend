import React from "react";

//components
import SearchBar from "../components/InputSearch";
import UploadSound from "../components/UploadSound";
import MostPopularSoundsComponent from "../components/MostPopularSoundsComponent";
import BrowseByCategories from "../components/BrowseByCategoriesComponent";
import TrackPlayer from "../components/TrackPlayer";

//style
import "../css/navbar.css";
import "../css/widgets.css";

function HomeScreen() {
  let soundsArray = [
    "/sounds/merry-christmas-sounds.mp3",
    "/sounds/emotional-ambient.mp3",
    "/sounds/jungle-waves.mp3",
  ];

  function soundName(soundUrl) {}

  const listSounds = soundsArray.map((soundUrl) => {
    return (
      <div className="rendering-track">
        <TrackPlayer trackUrl={soundUrl} />
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
        <button className="nav-button"> My library </button>
        <button className="nav-button"> My Account </button>
        <button className="nav-button"> Settings</button>
      </div>
      <BrowseByCategories />
      <div className="widgets">
        <MostPopularSoundsComponent />
        <UploadSound />
      </div>
      <div>{listSounds}</div>
    </div>
  );
}
export default HomeScreen;
