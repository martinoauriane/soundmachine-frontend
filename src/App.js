import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "../src/Views/HomeScreen";
import BrowseScreen from "./Views/BrowseScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/browseSounds" element={<BrowseScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
