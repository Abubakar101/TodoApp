import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import Todolists from"./components/Todolists";
import Categories from"./components/Categories";
import Dones from"./components/Dones";

class App extends Component {
  

  render() {
    return (
      <div className="App">
      <Link to = "/categories">Categories</Link>
      <Route exact path="/categories" component={Categories} />
      <Link to = "/dones">Dones</Link>
      <Route exact path="/dones" component={Dones} />
          <Link to = "/todolists">Todolists</Link>
          <Route exact path="/todolists" component={Todolists} />
          
          </div>
        );
      }
    }
    
    export default App;
    