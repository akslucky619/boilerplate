import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../scss/index.scss";


import HomePage from "../components/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}
export default App;
