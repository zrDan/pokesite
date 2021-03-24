import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import NewPokemon from "../pages/NewPokemon";
import PokemonView from "../pages/PokemonView";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/newPokemon" component={NewPokemon} />
            <Route exact path="/pokemon/:pokemonName" component={PokemonView} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}
