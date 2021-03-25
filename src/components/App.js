import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import NewPokemon from "../pages/NewPokemon";
import PokemonView from "../pages/PokemonView";
import PokemonFind from "../pages/PokemonFind";
import SessionAuth from "./SessionAuth";
import SigIn from "./SigIn";
import UserPage from "../pages/UserPage";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/newPokemon" component={NewPokemon} />
            <Route exact path="/pokemon/:pokemonName" component={PokemonView} />
            <Route exact path="/find/:pokemonName" component={PokemonFind} />
            <Route exact path="/user/aouth" component={SessionAuth} />
            <Route exact path="/user/new" component={SigIn} />
            <Route exact path="/user/profile" component={UserPage} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}
