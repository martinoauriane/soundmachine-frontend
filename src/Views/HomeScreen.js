import React from "react";
import SearchBar from "../components/SearchBar";
import UpdateSound from "../components/UpdateSound";
import Input from "@mui/material/Input";

function HomeScreen() {
  return (
    <div className="main">
      <img
        src={require(`../theme/soundmachine.png`)}
        alt="sun"
        style={{
          visibility: "visible",
        }}
      />
      <SearchBar />
      <UpdateSound />
    </div>
  );
}
export default HomeScreen;
