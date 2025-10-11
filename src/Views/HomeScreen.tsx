import { useState, useEffect } from "react";

//components
import SearchBar from "../components/InputSearch";
import MostPopularSoundsComponent from "../components/MostPopularSoundsComponent";
import UploadSound from "../components/UploadSound";
import { NavLink } from "react-router-dom";

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
        <SearchBar />
        <NavLink to="/browseSounds" className="navBarTitles">
          {" "}
          Browse sounds{" "}
        </NavLink>
        <NavLink to="/browseSounds"> My library </NavLink>
        <NavLink to="/browseSounds"> My account </NavLink>
        <NavLink to="/browseSounds"> Settings </NavLink>
      </div>
      <div className="widgets">
        <MostPopularSoundsComponent />
        <UploadSound />
      </div>
    </div>
  );
}
export default HomeScreen;
