import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import LivingCost from "./components/LivingCost.js";
import Footer from "./components/footer";
import City from "./components/city";
import Jobs from "./components/JobSelection";
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
              <Link to="/city">Select City</Link>
            </li>
            <li>
              <Link to="/LivingCost">Living Cost</Link>
            </li>
            <li>
              <Link to="/jobs">Job Selection</Link>
            </li>
          </ul>

          <Switch>
          <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/LivingCost">
              <LivingCost />
            </Route>
            <Route path="/city">
              <City />
            </Route>
            <Route path="/">
              <Home />

            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
     
    
  );
}

