import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "../src/Views/HomeScreen";
import CategoryScreen from "./Views/CategoryScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/browseSounds" element={<CategoryScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
