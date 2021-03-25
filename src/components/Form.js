import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signup, login } from "../api/apiCore";
import { autheticate } from "../api/apiCore";
import "./style/Form.css";

export default function Form({ title, formType }) {
  let history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });

    if (formType === "login") {
      login({ email, password }).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          autheticate(data.data, () => {
            setValues({ ...values, redirectToReferrer: true });
          });
        }

        history.push("/");
      });
    } else {
      signup({ email, password }).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            email: "",
            password: "",
            error: "",
            success: true,
          });

          history.push("/");
        }
      });
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h2>{title}</h2>
      </div>
      <div className="form-content">
        <form>
          <div className="form-input">
            <input
              type="mail"
              onChange={handleChange("email")}
              placeholder="Correo electronico"
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              onChange={handleChange("password")}
              placeholder="Contraseña"
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
