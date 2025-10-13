import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "../src/Views/HomeScreen";
import BrowseScreen from "./Views/BrowseScreen";
import UserProfileScreen from "./Views/MyProfileScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/browseSounds" element={<BrowseScreen />} />
        <Route path="/my-profile" element={<UserProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
