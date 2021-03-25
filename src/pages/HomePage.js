import React from "react";
import PokeList from "../components/PokeList";
import PokeFinder from "../components/PokeFinder";

export default function HomePage() {
  return (
    <div>
      <PokeFinder />
      <PokeList />
    </div>
  );
}
