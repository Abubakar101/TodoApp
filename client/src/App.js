import React, { Component } from "react";
// import logo from "./logo.svg";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
// import "./App.css";
import Todolists from"./components/Todolists";

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <div>
          <Link to = "/todolists">Todolists</Link>
          <Route exact path="/todolists" component={Todolists} />

        </div>
      </div>
    );
  }
}

export default App;
