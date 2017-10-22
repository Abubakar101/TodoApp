import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";


class Categories extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiArr: [],
      apiDataLoaded: false
    };
  }

  async componentDidMount() {
    await axios({
      method: "GET",
      url: "/categories"
    })
      .then(res => {
        // console.log("DATABASE DATA '/", res);
        this.setState({
          apiData: res.data.categories_data,
          apiDataLoaded: true
        });
      })
      .catch(err => console.error(err));
      
      let state = this.state.apiData;      
      for (let k in state) {
        let obj = {};
        obj[k] = state[k]
        this.setState({
          apiArr: this.state.apiArr.concat(obj)
        })
      }
  }

  showCategoriesOnPage() {
       return this.state.apiArr.map((category, i) => {
          console.log(Object.values(category))
              return (
                <div className="category" key={i}>
                  <p>{Object.keys(category)} ({Object.values(category)})</p>
                 
                </div>
              );
              });
  }

  render() {
    // console.log("apiarr", this.state.apiArr);
    return (
      <div className="App">
        {this.state.apiDataLoaded ? (this.showCategoriesOnPage()) : <p>Category Loading...</p>}
      </div>
    );
  }
}

export default Categories;
