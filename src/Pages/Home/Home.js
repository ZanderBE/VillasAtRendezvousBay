import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";
import VillaCarousel from "../../components/VillaCarousel/VillaCarousel";
import JumbotronVideo from "../../components/JumbotronVideo/JumbotronVideo";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <JumbotronVideo></JumbotronVideo>
        <div className="container">
          <section id="section-home1">
            <h2>Where Luxury Meets Comfort</h2>
          </section>
          <VillaCarousel />
        </div>
      </div>
    );
  }
}

export default Home;
