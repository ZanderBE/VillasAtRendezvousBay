import React, { Component } from "react";
import "./residencies.css";
import VillaCarousel from "../../components/VillaCarousel/VillaCarousel";

class Residencies extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <VillaCarousel />
      </div>
    );
  }
}

export default Residencies;
