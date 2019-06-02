import React, { Component } from "react";
import fire from "../config/Fire";

class Home extends Component {
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div className="col-md-6">
        <div>Home</div>
        <button onClick={this.logout}>Sign Out</button>
      </div>
    );
  }
}

export default Home;
