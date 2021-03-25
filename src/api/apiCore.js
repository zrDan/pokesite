import { API } from "../config";
import axios from "axios";

export function getUser() {
  const token = JSON.parse(localStorage.getItem("jwt"));
  const userMail = { email: token.user.email };
  return axios
    .post(`${API}/api/auth/user`, userMail)
    .then((response) => response)
    .catch((err) => console.log(`Error: ${err}`));
}

export function signup(user) {
  return axios
    .post(`${API}/api/auth/signup`, user)
    .then((response) => response)
    .catch((err) => console.log(`Error: ${err}`));
}

export function login(user) {
  return axios
    .post(`${API}/api/auth/login`, user)
    .then((response) => response)
    .catch((err) => console.log(`Error: ${err}`));
}

export function autheticate(data, next) {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
}

export function isAuthenticated() {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
}

export function logout() {
  localStorage.clear();
}

export function getNewpokemonDetails(pokemonName) {
  return axios
    .get(`${API}/api/newpokemon/pokemonDetails/${pokemonName}`)
    .then((response) => response)
    .catch((err) => console.log(`Error ${err}`));
}

export function createPokemon(pokemon) {
  return axios
    .post(`${API}/api/newpokemon/create`, pokemon)
    .then((response) => response)
    .catch((err) => console.log(`Error: ${err}`));
}
