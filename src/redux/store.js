import reducer from "./reducer";
import { createStore } from "redux";

const initialState = {
  pokemonList: [],
  pokemonUrl: "https://pokeapi.co/api/v2/pokemon/?limit=150",
};

const store = createStore(reducer, initialState);

export default store;
