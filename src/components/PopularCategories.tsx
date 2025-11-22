import { useState, useEffect } from "react";
// utils
import { categories } from "../utils";
//style
import "../css/home-page.css";
import "../css/popular-categories.css";

function PopularCategories() {
  const [popularCategories, setPopularCategories] = useState<string[]>([]);

  useEffect(() => {
    setPopularCategories(categories.slice(3, 9));
  }, []);

  const mostPopular = popularCategories?.map((category) => {
    return <button className="generic-button"> {category}</button>;
  });

  return (
    <div className="popular-category-container">
      <p className="title"> Popular categories </p>
      {mostPopular}
    </div>
  );
}

export default PopularCategories;
