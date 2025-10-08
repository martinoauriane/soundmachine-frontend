import { useState } from "react";
import "./inputSearch.css";

export function SearchBar() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="search-container">
      <input
        className="input-search"
        type="text"
        placeholder="Search a sound..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
    </div>
  );
}

export default SearchBar;
