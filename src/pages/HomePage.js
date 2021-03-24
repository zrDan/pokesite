import React from "react";
import PokeList from "../components/PokeList";
import PokeFinder from "../components/PokeFinder";
import "./style/HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <PokeFinder />
      <PokeList />
    </div>
  );
}
