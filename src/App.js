import React from "react";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" exact component={Home} />

        <Redirect from="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
