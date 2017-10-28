import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import Add from "./partials/Add";

class AddList extends Component {
  constructor() {
    super();
    this.state = {
      apiData:null
    };
    this.railsSubmit = this.railsSubmit.bind(this);
  }

   componentDidUpdate() {
    console.log(this.props.data, "data propsssssssssssssss")
    this.setState({
      apiData: this.props.data
    })
    // debugger
    console.log(this.state.apiData, "data STATE")
  }

  shouldComponentUpdate(nextProps, nextState) {
    // debugger
    return nextProps.data !== this.props.data;
  }
  railsSubmit(e) {
    let userId = this.props.data[0].user_id;
    e.preventDefault();
    console.log(e, "->>>>>>>railsSubmit");
    console.log(e.target.title.value, "->>>>>>>title");
    console.log(e.target.category.value, "->>>>>>>category");
    console.log(e.target.description.value, "->>>>>>>description");
    axios({
      method: 'POST',
      url: `http://localhost:3001/users/${userId}/todolists`,
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
    })
      .then((res) => {
        console.log('Todolist was sent');
      })
      .catch(err => console.log(err));
  }


  render() {
    // console.log(this.state.apiData, "STATE data")
    return (
      <div className="App">
        <Add railsSubmit={this.railsSubmit} />
      </div>
    );
  }
}

export default AddList;
