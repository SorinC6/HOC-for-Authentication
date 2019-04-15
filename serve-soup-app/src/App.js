import React, { Component } from "react";
import "./App.css";
import authenticate from "./components/Auth/Authenticate";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default authenticate(App)(Login);
