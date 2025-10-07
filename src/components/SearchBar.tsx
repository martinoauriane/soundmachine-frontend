import { useState } from "react";
export function SearchBar() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search a sound..."
      />
    </div>
  );
}

export default SearchBar;
