import React from "react";

//components
import SearchBar from "../components/InputSearch";
import UploadSound from "../components/UploadSound";
import MostPopularSoundsComponent from "../components/MostPopularSoundsComponent";
import BrowseByCategories from "../components/BrowseByCategoriesComponent";
//style
import "../css/navbar.css";
import "../css/widgets.css";

function HomeScreen() {
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
        <button className="nav-button"> Categories </button>
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
    </div>
  );
}
export default HomeScreen;
