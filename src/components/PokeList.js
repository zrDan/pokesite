import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokeCard from "./PokeCard";
import "./style/PokeList.css";

export default function PokeList() {
  const dispatch = useDispatch();
  const pokemonStateList = useSelector((state) => state.pokemonList);
  const pokemonStateUrl = useSelector((state) => state.pokemonUrl);

  const [status, setStatus] = useState({
    error: "",
    loading: true,
  });

  const { error, loading } = status;

  const showError = () => error && <h4>{error}</h4>;

  const showLoading = () => loading && <h4>Loading...</h4>;

  useEffect(() => {
    if (pokemonStateList.length < 1) {
      fetch(pokemonStateUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: "SET_POKEMON_LIST",
            payload: {
              list: data.results,
            },
          });
          setStatus({ ...status, loading: false });
        });
    } else {
      setStatus({ ...status, loading: false });
    }
  }, []);

  return (
    <div className="wrapper">
      {showError()}
      {showLoading()}
      <React.Fragment>
        {pokemonStateList.map(({ name, url }) => (
          <PokeCard key={name} pokemon={name} url={url} />
        ))}
      </React.Fragment>
    </div>
  );
}
