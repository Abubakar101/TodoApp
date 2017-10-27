import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Add from "./partials/Add";

class AddList extends Component {
  constructor() {
    super();
    this.railsSubmit = this.railsSubmit.bind(this);
  }
  railsSubmit(e) {
    e.preventDefault();
    console.log(e, "->>>>>>>railsSubmit");
    console.log(e.target.title.value, "->>>>>>>title");
    console.log(e.target.category.value, "->>>>>>>category");
    console.log(e.target.description.value, "->>>>>>>description");
  }

  render() {
    return (
      <div className="App">
        <Add railsSubmit={this.railsSubmit} />
      </div>
    );
  }
}

export default AddList;
