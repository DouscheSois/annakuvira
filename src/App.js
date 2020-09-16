import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Recipes from "./components/Recipes";
import SearchNutrition from "./components/SearchNutrition";
import Navbar from "./components/Navbar";
import Footnote from "./components/Footnote";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchNutrition />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
        </Switch>
        <Footnote />
      </div>
    </Router>
  );
};

export default App;
