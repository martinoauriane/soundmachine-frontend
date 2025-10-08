import React from "react";

//components
import SearchBar from "../components/InputSearch";
import UpdateSound from "../components/UploadSound";
import MostPopularSoundsComponent from "../components/MostPopularSoundsComponent";
import BrowseByCategories from "../components/BrowseByCategoriesComponent";
//style
import "../css/navbar.css";
import "../css/widgets.css";
import "../css/browsebycategories.css";

function CategoryScreen() {
  const categories = [
    "Funk",
    "Electronica",
    "Hip Hop and R&B",
    "Rock",
    "Factory and Warehouse",
    "Drums",
    "Guitar",
    "Synth Keys",
    "Piano",
    "Bass",
  ];

  const handleCategoryClick = (category: string) => {
    // Logique pour mettre à jour le son
  };

  return (
    <div className="container">
      <div className="browsecontainer">
        <p className="title">Browse by category</p>
        <div className="scroll-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CategoryScreen;
