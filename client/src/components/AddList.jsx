import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Add from"./partials/Add";


class AddList extends Component {



  render() {
    return (
      <div className="App">
      <Add  />
      </div>
    );
  }
}

export default AddList;
