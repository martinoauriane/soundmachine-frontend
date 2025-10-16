import React from "react";
import { NavLink } from "react-router-dom";
// components
import SearchBar from "./InputSearch";
// style
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <img
        className="soundmachine-logo"
        src="/theme/soundmachine.png"
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
      <NavLink to="/my-profile"> My profile </NavLink>
      <button className="button-none">
        <img
          className="logo"
          src="/theme/log-out.png"
          alt="sun"
          style={{
            visibility: "visible",
          }}
        />
      </button>
    </div>
  );
};

export default Navbar;
