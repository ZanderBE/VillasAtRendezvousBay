import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Residencies from "./Pages/Residencies/Residencies";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/residencies" component={Residencies} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
