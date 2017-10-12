import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";


class Categories extends Component {
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
      url: "/categories/NEW"
    })
      .then(res => {
        console.log(res, "DATABASE DATA '/");
        this.setState({
          apiData: res.data.categories_data,
          apiDataLoaded: true
        });
      })
      .catch(err => console.error(err));
  }

  showCategoryOnPage() {
    return this.state.apiData.map(category => {
      return (
        <div className="category" key={category.id}>
          <p>{category.title}</p>
          <span className="category">{category.description}</span>
          <p className="category">{category.status}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.apiDataLoaded ? (
            this.showCategoryOnPage()
          ) : (
            <p>Category Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

export default Categories;
