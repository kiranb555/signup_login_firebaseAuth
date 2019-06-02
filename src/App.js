import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login";
import Home from "./components/Home";

class App extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
