import React from "react";
import { Link } from "react-router-dom";
import "./style/PokeCard.css";

export default function PokeCard({ pokemon, url }) {
  const pokeId = url.split("/")[6];

  return (
    <Link to={`/pokemon/${pokemon}`}>
      <div className="card">
        <div className="card-image">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
            alt={pokemon}
          />
        </div>
        <div className="card-name">
          <span>{pokemon}</span>
        </div>
      </div>
    </Link>
  );
}
