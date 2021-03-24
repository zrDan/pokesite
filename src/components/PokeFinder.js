import React from "react";
import "./style/PokeFinder.css";

export default function PokeFinder() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="bar">
          <input type="text" placeholder="Buscas un Pokemon?" />
        </div>
        <div className="bar-image">
          <img
            src="https://img.icons8.com/color/48/000000/search--v1.png"
            alt="lupa"
          />
        </div>
      </div>
    </div>
  );
}
