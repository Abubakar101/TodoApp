import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Add from"./components/partials/Add";

class Todolists extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "/todolists"
    })
      .then(res => {
        console.log(res, "DATABASE DATA '/");
        this.setState({
          apiData: res.data.todolists_data,
          apiDataLoaded: true
        });
      })
      .catch(err => console.error(err));
  }

  showTodolistsOnPage() {
    return this.state.apiData.map(todolist => {
      console.log(todolist)
      return (
        <div className="todolist" key={todolist.id}>
          <p>{todolist.title}</p>
          <p>{todolist.category} </p>
          <span className="category">{todolist.description}</span>
          <span className="category">{todolist.status}</span>
          
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
        <Link to = "/categories">CAT</Link>
          {this.state.apiDataLoaded ? (
            this.showTodolistsOnPage()
          ) : (
            <p>Loading...</p>
          )}
         
        </div>
      </div>
    );
  }
}

export default Todolists;
// <Route exact path="/categories" component={Categories} />