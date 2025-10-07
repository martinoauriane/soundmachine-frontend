import React from "react";
import SearchBar from "../components/SearchBar";

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
      <link ahref="/"></link>
    </div>
  );
}
export default HomeScreen;
