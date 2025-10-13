import { useState, useEffect } from "react";
//components
import SearchBar from "../components/InputSearch";
import MostPopularSoundsComponent from "../components/MostPopularSoundsComponent";
import UploadSound from "../components/UploadSound";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
//style
import "../css/navbar.css";
import "../css/widgets.css";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className="widgets">
        <MostPopularSoundsComponent />
        <UploadSound />
      </div>
    </div>
  );
}
export default HomeScreen;
