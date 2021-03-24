import reducer from "./reducer";
import { createStore } from "redux";

const initialState = {
  pokemonList: [],
};

const store = createStore(reducer, initialState);

export default store;
