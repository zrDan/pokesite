import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style/PokeDescription.css";

export default function PokeDescription() {
  const { pokemonName } = useParams();

  const [pokemonDesc, setPokemon] = useState({
    _id: "",
    abilities: [],
    types: [],
    sprites: [],
    weight: 0,
    height: 0,
  });

  const [status, setStatus] = useState({
    error: "",
    loading: true,
  });

  const { error, loading } = status;

  const showLoading = () => loading && <h3>Loading...</h3>;

  function isEmpty() {
    if (error) {
      return <h3>No se encontro el pokemon</h3>;
    } else if (!loading) {
      return (
        <div className="pokemon-content">
          <div className="pokemon-image">
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDesc._id}.png`}
              alt="pokemon"
            />
          </div>
          <div className="pokemon-specs">
            <table>
              <tbody>
                <tr>
                  <th>Pokemon Id</th>
                  <th>Especie</th>
                </tr>
                <tr>
                  <td>{pokemonDesc._id}</td>
                  <td>{pokemonName}</td>
                </tr>
                <tr>
                  <th>Peso</th>
                  <th>Altura</th>
                </tr>
                <tr>
                  <td>{pokemonDesc.weight}00 g</td>
                  <td>{pokemonDesc.height}00 cm</td>
                </tr>
                <tr>
                  <th colSpan="2">Tipo</th>
                </tr>
                <tr>
                  <td colSpan="2">
                    {pokemonDesc.types.map(({ slot, type }) => (
                      <p key={slot}>{type.name}</p>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">Sprites</th>
                </tr>
                <tr>
                  <td colSpan="2" className="sprites">
                    {pokemonDesc.sprites.map((pixel) => {
                      if (typeof pixel !== "string") {
                        return "";
                      }

                      return <img key={pixel} src={pixel} alt="sprite" />;
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon({
          _id: data.id,
          abilities: data.abilities,
          types: data.types,
          sprites: Object.values(data.sprites),
          weight: data.weight,
          height: data.height,
        });
        setStatus({ ...status, loading: false });
      })
      .catch((err) => {
        console.log("Error: ", err);
        setStatus({ error: "No se Encontro el pokemon", loading: false });
      });
  }, []);

  return (
    <React.Fragment>
      <div className="pokemon-container">
        {showLoading()}
        {isEmpty()}
      </div>
    </React.Fragment>
  );
}
