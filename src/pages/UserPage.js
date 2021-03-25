import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUser, logout } from "../api/apiCore";
import "./style/UserPage.css";

export default function UserPage() {
  let history = useHistory();

  const [userValues, setValues] = useState({
    email: "",
    error: "",
  });

  const { email, error } = userValues;

  const findUser = () => {
    getUser().then((userData) => {
      if (userData.error) {
        setValues({ ...userValues, error: userData.error });
      } else {
        let data = userData.data[0];

        setValues({
          ...userValues,
          email: data.email,
        });
      }
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    logout();
    history.push("/");
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <div className="user-container">
      <div className="user-content">
        <div className="user-header">
          <div className="user-image">
            <img src="https://img.icons8.com/color/100/000000/pikachu-pokemon.png" />
          </div>
        </div>
        <div className="user-text">
          <h1>Bienvenido!</h1>
          <h3>{email}</h3>
        </div>
        <div className="logout" onClick={handleClick}>
          <h4>Salir</h4>
        </div>
      </div>
    </div>
  );
}
