import React, { Component } from "react";
import axios from "axios";
import Navbar from "./pages/layout/Navbar2.js";

class Joke extends Component {
  state = {
    joke: "",
  };

  componentDidMount = () => {
    this.fetchJoke();
  };

  fetchJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => this.setState({ joke: res.data.joke }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
        <div>
        <Navbar />
      <div className="mt-4">
        <div className="card">
          <h5 className="card-header">Dad Joke</h5>
          <div className="card-body">
            <p className="card-text">{this.state.joke}</p>
            <button
              className="btn btn-primary text-white"
              onClick={this.fetchJoke}
            >
              Get Another Joke
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Joke;
