import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import LivingCost from "./components/LivingCost.js";
import Jobs from "./components/JobSelection";
import Results from "./components/Results";
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

          <Switch>
          <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/LivingCost">
              <LivingCost />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/">
              <Home />

            </Route>
           
          </Switch>
        </div>
        
      </div>
    </Router>
     
    
  );
}

