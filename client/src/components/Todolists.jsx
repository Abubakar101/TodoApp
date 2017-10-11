import React, { Component } from "react";
import axios from "axios";


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
    return this.state.apiData.map(quote => {
      return (
        <div className="quote" key={quote.id}>
          <p>{quote.title}</p>
          <span className="category">{quote.description}</span>
          <span className="category">{quote.status}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
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
