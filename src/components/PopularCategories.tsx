import { useState, useEffect } from "react";
//components
import TrackPlayer from "./TrackPlayer";
// utils
import { Song } from "../utils";
import { soundsArray } from "../utils";
import { categories } from "../utils";
//style
import "../css/home-page.css";

function PopularCategories() {
  const [popularCategories, setPopularCategories] = useState<string[]>([]);

  useEffect(() => {
    setPopularCategories(categories.slice(3, 9)); // just for demo
  }, []);

  const mostPopular = popularCategories?.map((category) => {
    return (
      <div className="space">
        <button className="generic-button"> {category}</button>
      </div>
    );
  });

  return (
    <div className="category-container">
      <p className="balise"> Popular categories </p>
      {mostPopular}
    </div>
  );
}

export default PopularCategories;
