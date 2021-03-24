import React from "react";
import "./style/Form.css";

export default function Form({ title }) {
  return (
    <div className="form-container">
      <div className="form-title">
        <h2>{title}</h2>
      </div>
      <div className="form-content">
        <form>
          <div className="form-input">
            <input type="mail" placeholder="Correo electronico" />
          </div>
          <div className="form-input">
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="button-container">
            <button>Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
