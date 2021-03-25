import React from "react";
import LogIn from "./LogIn";
import { Redirect } from "react-router-dom";
import { isAuthenticated, autheticate } from "../api/apiCore";

export default function SessionAuth() {
  const redirectUser = () => {
    if (isAuthenticated()) {
      return <Redirect to="/user/profile" />;
    }
  };

  return (
    <>
      {redirectUser()}
      <LogIn />
    </>
  );
}
