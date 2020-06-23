import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import LivingCost from "./LivingCost.js";
import Footer from "./components/footer"
//import  Background from "./components/images/CitiPicture.png";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <div className="mainContent">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/LivingCost">Living Cost</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/LivingCost">
                <LivingCost />
              </Route>
              <Route path="/Home">
                <Home />



              </Route>
              <Route path="/">
                <Home />

              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
    </Router>
  );
}

