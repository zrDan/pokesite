import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokeCard from "./PokeCard";
import "./style/PokeList.css";

export default function PokeList() {
  const dispatch = useDispatch();
  const pokemonStateList = useSelector((state) => state.pokemonList);

  const [status, setStatus] = useState({
    error: "",
    loading: true,
  });
  const { error, loading } = status;

  const showError = () => <h4>{error}</h4>;

  const showLoading = () => loading && <h4>Loading...</h4>;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_POKEMON_LIST",
          payload: list.results,
        });
        setStatus({ ...status, loading: false });
      })
      .catch((err) => {
        console.log("Error: ", err);
        setStatus({ error: err, loading: false });
      });
  }, [dispatch]);

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
