import React from "react";
//import axios from "axios";
import Login from "./Login";
import { Route } from "react-router-dom";
import Register from "./Register";
import Home from "../Home/Home";

const Authenticate = App => LoginPage => {
  return class extends React.Component {
    state = {
      showError: false,
      loggedIn: false,
      token: null
    };

    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.setState({
          loggedIn: true,
          token: localStorage.getItem("token")
        });
      } else {
        this.setState({ loggedIn: false });
        localStorage.clear();
      }
    }

    render() {
      if (this.state.loggedIn) {
        return (
          <div>
            <App />;
          </div>
        );
      } else {
        return (
          <div>
            <Route path="/register" component={Register} />
            <Route exact path="/" component={Login} />
          </div>
        );
      }
    }
  };
};

export default Authenticate;
