import React from "react";

//components
import SearchBar from "../components/SearchBar";
import UpdateSound from "../components/UpdateSound";

//style
import "../css/navbar.css";

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
      </div>
      <UpdateSound />
    </div>
  );
}
export default HomeScreen;
