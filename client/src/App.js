import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import Todolists from "./components/Todolists";
import Categories from "./components/Categories";
import Dones from "./components/Dones";
// import Add from"./components/partials/Add";
import AddList from "./components/AddList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null
    };
  }

  async componentDidMount() {
    await axios({
      method: "GET",
      url: "/todolists"
    })
      .then(res => {
        console.log(res.data.todolists_data, "DATABASE DATA '/");
        // this.props.getData(res.data.todolists_data);
        this.setState({
          apiData: res.data.todolists_data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    // console.log(this.state.apiData, "data")
    return (
      <div className="App">
        <Link to="/categories">Categories</Link>
        <Route exact path="/categories" component={Categories} />

        <Link to="/dones">Dones</Link>
        <Route exact path="/dones" component={Dones} />

        <Route
          exact
          path="/add"
          render={props => <AddList data={this.state.apiData} />}
        />

        <Link to="/todolists">Todolists</Link>
        <Route
          exact
          path="/todolists"
          render={props => <Todolists data={this.state.apiData} />}
        />
      </div>
    );
  }
}

export default App;
