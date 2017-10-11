import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount() {
    console.log("Compund did mount working")
    fetch('/users', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }).then(res => res.json()).then((jsonRes) => {
      console.log("Compund did mount data from rails", jsonRes)
      this.setState({
        apiData: jsonRes.users_data,
        apiDataLoaded: true,
      });
    });
  }

  // showQuotesOnPage() {
  //   return this.state.apiData.map((quote) => {
  //     return (
  //       <div className="quote" key={quote.id}>
  //         <p>{quote.content}</p>
  //         <span className="author">{quote.name}</span>
  //         <span className="category">{quote.username}</span>
  //       </div>
  //     );
  //   });
  // }

  // {(this.state.apiDataLoaded) ? this.showQuotesOnPage() : <p>Loading...</p>}
  render() {
    console.log("Apidata", this.state.apiData)
    return (
      <div className="App">
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;

