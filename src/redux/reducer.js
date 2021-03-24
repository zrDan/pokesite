export default function reducer(state, action) {
  switch (action.type) {
    case "SET_POKEMON_LIST":
      return { pokemonList: action.payload };

    default:
      return state;
  }
}
