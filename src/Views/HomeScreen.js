import React from "react";

//components
import SearchBar from "../components/InputSearch";
import UpdateSound from "../components/UpdateSound";
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
      <MostPopularSoundsComponent />
      <div className="widgets">
        <BrowseByCategories />
        <UpdateSound />
      </div>
    </div>
  );
}
export default HomeScreen;
