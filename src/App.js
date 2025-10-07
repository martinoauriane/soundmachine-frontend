import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import HomeScreen from "../src/Views/HomeScreen.js";
import SoundLibrary from "./Views/SoundLibrary.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/mysounds" element={<SoundLibrary />} />
      </Routes>
    </Router>
  );
}

export default App;
