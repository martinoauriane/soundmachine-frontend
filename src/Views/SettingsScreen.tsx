import { useState, useEffect } from "react";

//components
import BrowseByCategories from "../components/BrowseByCategoriesComponent";
import TrackPlayer from "../components/TrackPlayer";
import Navbar from "../components/Navbar";

// utils
import { Song } from "../utils";
import { soundsArray } from "../utils";

//style
import "../css/navbar.css";
import "../css/home-page.css";

function SettingScreen() {
  // rendering each sound with TrackPlayer (play/pause)

  return (
    <div className="main">
      <Navbar />
      <button> Delete account </button>
    </div>
  );
}
export default SettingScreen;
