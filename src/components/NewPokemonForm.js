import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPokemon } from "../api/apiCore";
import "./style/Form.css";

export default function NewPokemonForm() {
  let history = useHistory();

  const [values, setValues] = useState({
    name: "",
    weight: "",
    height: "",
    elemental: "",
    sprites: ["empty"],
  });

  const { name, weight, height, elemental, sprites } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    createPokemon({ name, weight, height, elemental, sprites }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          name: "",
          weight: "",
          height: "",
          elemental: "",
          sprites: ["empty"],
        });

        history.push("/");
      }
    });
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h2>Crea un nuevo pokemon</h2>
      </div>
      <div className="form-content">
        <form>
          <div className="form-input">
            <input
              type="text"
              onChange={handleChange("name")}
              placeholder="Nombre"
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              onChange={handleChange("weight")}
              placeholder="Peso"
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              onChange={handleChange("height")}
              placeholder="Altura"
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              onChange={handleChange("elemental")}
              placeholder="Tipo"
            />
          </div>
          <div className="button-container">
            <button onClick={clickSubmit}>Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
