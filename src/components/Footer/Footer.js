import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <br />
        <br />
        2019 &copy; Rendezvous Bay Villas. All Rights Reserved
        <br />
        <br />
        <div className="col-lg-12 mb-5 mb-lg-0">
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://www.facebook.com/aaron.gonzalez.71653318"
          >
            <i className="fab fa-fw fa-facebook-f" />
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://github.com/AaronGonzo"
          >
            <i className="fab fa-fw fa-github" />
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://www.linkedin.com/in/aaron-gonzalez-9ba086108/"
          >
            <i className="fab fa-fw fa-linkedin-in" />
          </a>
          <a
            className="btn btn-outline-light btn-social mx-1"
            href="https://www.instagram.com/aagonz15/?hl=en"
          >
            <i className="fab fa-fw fa-instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
