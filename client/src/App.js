import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import Todolists from"./components/Todolists";
import Categories from"./components/Categories";

class App extends Component {
  

  render() {
    return (
      <div className="App">
          <Link to = "/todolists">Todolists</Link>
          <Route exact path="/todolists" component={Todolists} />
          <Route exact path="/categories/NEW" component={Categories} />

      </div>
    );
  }
}

export default App;
