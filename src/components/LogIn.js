import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import "./style/Container.css";

export default function LogIn() {
  return (
    <div className="container">
      <Form title="Iniciar Sesion" formType="login" />
      <Link to="/user/new">Crear una Cuenta</Link>
    </div>
  );
}
