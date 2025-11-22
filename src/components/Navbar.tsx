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
        <p className="archivo-black-regular"> HOME </p>
      </NavLink>
      <NavLink to="/browseSounds" className="navBarTitles">
        <p className="archivo-black-regular"> BROWSE </p>
      </NavLink>
      <NavLink to="/my-profile">
        <p className="archivo-black-regular"> PROFILE </p>
      </NavLink>
      <button className="button-none">
        <img
          className="settings"
          src="/theme/setting.png"
          alt="sun"
          style={{ visibility: "visible" }}
        />
      </button>
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
