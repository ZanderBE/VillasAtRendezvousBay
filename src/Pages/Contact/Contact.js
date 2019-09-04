import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./contactpage.css";
import ContactForm from "../../components/ContactForm/ContactForm";

class Home extends Component {
  render() {
    return (
      <div className="contact-page">
        <ContactForm />
      </div>
    );
  }
}

export default Home;
