import React, { Component } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Logo from "./rb-blue-logo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <div>
        <header className="navbar-list">
          <nav className="navbar navbar-expand-sm navbar-white">
            <NavLink to="/" className="navbar-brand">
              <img id="logo" src={Logo} alt={Logo} />
            </NavLink>
            <button
              onClick={this.toggleNavbar}
              className={`${classTwo}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`${classOne}`} id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    The Project <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/residencies" className="nav-link">
                    Residencies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/islandlife" className="nav-link">
                    Island Life
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/transportation" className="nav-link">
                    Transportation
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/gallery" className="nav-link">
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavBar;
