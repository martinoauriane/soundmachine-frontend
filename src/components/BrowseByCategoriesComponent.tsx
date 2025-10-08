import React from "react";
import colors from "./colors";
import "../css/browsebycategories.css";

export function BrowseByCategories() {
  const browsingLibrary = () => {
    alert("browsing library to update sound");
  };
  const categories = [
    "Funk",
    "Electronica",
    "Hip Hop and R&B",
    "Rock",
    "Factory and Warehouse",
  ];

  return (
    <div className="browsecontainer">
      <button className="browse-by-category" onClick={browsingLibrary}>
        <p> Browse by category </p>
      </button>
    </div>
  );
}

export default BrowseByCategories;
