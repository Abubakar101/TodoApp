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

  async componentDidMount() {
    await axios({
      method: "GET",
      url: "/categories"
    })
      .then(res => {
        console.log("DATABASE DATA '/", res);
        this.setState({
          apiData: res.data.categories_data,
          apiDataLoaded: true
        });
      })
      .catch(err => console.error(err));
  }

  showCategoriesOnPage() {
    console.log(this.state.apiData)
    return this.state.apiData.map((category, i) => {
      return (
        <div className="category" key={i}>
          <p>{category}</p>
         
        </div>
      );
    });
  }

  render() {
    console.log(this.state.apiData);
    return (
      <div className="App">
        {this.state.apiDataLoaded ? (this.showCategoriesOnPage()) : <p>Category Loading...</p>}
      </div>
    );
  }
}

export default Categories;

// {this.state.apiDataLoaded ? (
//   this.showCategoriesOnPage()
// ) : (
//   <p>Category Loading...</p>
// )}
