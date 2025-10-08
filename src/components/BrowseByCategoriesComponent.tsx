import React, { useRef } from "react";
import "../css/browsebycategories.css";

export const BrowseByCategories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories: string[] = [
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

  // Variables pour le drag-to-scroll
  let isDown = false;
  let startX: number = 0;
  let scrollLeft: number = 0;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // vitesse du scroll
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCategoryClick = (category: string) => {
    alert(`Tu as sélectionné : ${category}`);
    // Ici tu peux mettre à jour ton son
  };

  return (
    <div className="browsecontainer">
      <p className="title">Browse by category</p>
      <div
        className="scroll-container"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
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
  );
};

export default BrowseByCategories;
