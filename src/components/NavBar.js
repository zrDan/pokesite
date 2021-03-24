import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/NavBar.css";

export default function NavBar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const pokeball = document.getElementById("pokeball");
    const options = document.getElementById("options");

    if (!active) {
      pokeball.src =
        "https://img.icons8.com/plasticine/50/000000/open-pokeball.png";
      options.style.visibility = "visible";
      setActive(true);
    } else {
      pokeball.src = "https://img.icons8.com/plasticine/50/000000/pokeball.png";
      options.style.visibility = "hidden";
      setActive(false);
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <Link to="/">
            <img src="/PokeSite.png" alt="pokemon" />
          </Link>
        </div>
        <div className="mobile" onClick={handleClick}>
          <img
            id="pokeball"
            src={"https://img.icons8.com/plasticine/50/000000/pokeball.png"}
            alt="pokemon"
          />
        </div>
        <div id="options" className="options">
          <div className="newpokemon-option">
            <Link to="/newPokemon">Crear Pokemon</Link>
          </div>
          <div>
            <Link to="/user/aouth">Cuenta</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
