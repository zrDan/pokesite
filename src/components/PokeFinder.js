import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style/PokeFinder.css";

export default function PokeFinder() {
  const [pokemonFind, setPokemonfind] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setPokemonfind(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemonFind !== "") {
      history.push(`/find/${pokemonFind}`);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="bar">
          <input
            type="text"
            placeholder="Buscas un Pokemon?"
            onChange={handleChange}
          />
        </div>
        <div className="bar-image" onClick={handleSubmit}>
          <img
            src="https://img.icons8.com/color/48/000000/search--v1.png"
            alt="lupa"
          />
        </div>
      </div>
    </div>
  );
}
