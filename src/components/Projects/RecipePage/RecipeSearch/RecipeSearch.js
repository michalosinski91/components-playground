import React, { useState } from "react";
import "./RecipeSearch.scss";

export default function RecipeSearch() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="recipe-search">
      <h3>Search for recipes</h3>
      <div className="recipe-search__form">
        <input
          className="recipe-search__input"
          type="text"
          placeholder="Recipe"
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
        />
        <i className="fas fa-search fa-2x"></i>
      </div>
    </div>
  );
}
