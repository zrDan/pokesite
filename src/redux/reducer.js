export default function reducer(state, action) {
  switch (action.type) {
    case "SET_POKEMON_LIST":
      const list = action.payload.list;
      return { pokemonList: list };

    default:
      return state;
  }
}
