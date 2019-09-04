import React, { Component } from "react";
import Beach from "./beach.mp4";

class JumbotronVideo extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <video autoPlay muted loop poster="">
          <source src={Beach} data-src={Beach} type="video/mp4" />
        </video>
        <div className="container text-white">
          <h1>The Villas At Rendezvous Bay</h1>
          <h5>An Exclusive Beachside Retreat </h5>
        </div>
      </div>
    );
  }
}

export default JumbotronVideo;
