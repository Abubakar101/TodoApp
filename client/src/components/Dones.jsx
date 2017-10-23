import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";


class Dones extends Component {
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
      url: "/dones"
    })
      .then(res => {
        console.log("DATABASE DATA '/", res);
        this.setState({
          apiData: res.data.dones_data,
          apiDataLoaded: true
        });
      })
      .catch(err => console.error(err));
      
//       let state = this.state.apiData;      
//       for (let k in state) {
//         let obj = {};
//         obj[k] = state[k]
//         this.setState({
//           apiArr: this.state.apiArr.concat(obj)
//         })
//       }
  }

  showDonesOnPage() {
    return this.state.apiData.map(dones => {
      console.log(dones)
      return (
        <div className="dones" key={dones.id}>
          <p>{dones.title}</p>
          <p>{dones.category} </p>
          <span className="category">{dones.description}</span>
          <span className="category">{dones.status}</span>
          
        </div>
      );
    });
  }

  render() {
    // console.log("apiarr", this.state.apiArr);
    return (
      <div className="App">
        {this.state.apiDataLoaded ? (this.showDonesOnPage()) : <p>Dones Loading...</p>}
      </div>
    );
  }
}

export default Dones;
