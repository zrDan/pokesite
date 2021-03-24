import React from "react";
import { Link } from "react-router-dom";
import SessionAuth from "./SessionAuth";
import "./style/NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <Link to="/">
            <img src="/PokeSite.png" alt="pokemon" />
          </Link>
        </div>
        <div className="mobile">
          <img
            src="https://img.icons8.com/plasticine/50/000000/pokeball.png"
            alt="pokemon"
          />
          {/* <img src="https://img.icons8.com/plasticine/50/000000/open-pokeball.png" /> */}
        </div>
        <div className="options">
          <div className="newpokemon-option">
            <Link to="/newPokemon">Crear Pokemon</Link>
          </div>
          <div>
            <SessionAuth />
          </div>
        </div>
      </div>
    </div>
  );
}
