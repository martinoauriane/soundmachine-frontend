import React, { useRef } from "react";

// style
import "../css/browsebycategories.css";
import { categories } from "../utils";

interface BrowseByCategoriesProps {
  onSelect: (category: string) => void;
}
export const BrowseByCategories = ({ onSelect }: BrowseByCategoriesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    onSelect(category);
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
