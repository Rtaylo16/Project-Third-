import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from "./components/Signup.js";
import Button from "./components/Button.js";
import AuthForm from "./components/AuthForm.js";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import LivingCost from "./components/LivingCost.js";
import Footer from "./components/footer";
import City from "./components/city";
import Jobs from "./components/JobSelection";
import Private from "./components/Private"
import TestPage from "./components/testPages"
//import  Background from "./components/images/CitiPicture.png";
import AuthContext from './context/authContext'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App() {
  useEffect(()=>{
    const userData = JSON.parse(sessionStorage.getItem('userLogin'))
    if(userData){
      auth.onLogin(userData)
    }
    
  },[])
  const [auth, setAuth] = useState({
    user: "",
    onLogin: function (userInfo) {
      setAuth(curr => ({ ...curr, user: userInfo }))
      sessionStorage.setItem('userLogin',JSON.stringify(userInfo))
    },
    onLogout: function () {
      setAuth(curr => ({ ...curr, user: "" }))
      sessionStorage.setItem('userLogin', "")
    },
    loaded:false
  })
  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <div className="main">
          <Header />
          <div className="mainContent">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            {/* <ul>
            <li>
              <Link to="/Home">Home</Link>
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
            <li>
            <Link to="/login">Login</Link>
            </li>
              </ul> */}

            <Switch>
              <Route path="/jobs">
                <Jobs />
              </Route>
              <Route path="/LivingCost">
                <LivingCost />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/city">
                <City />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Button">
                <Button />
              </Route>
              {/* <Route path="/AuthForm">
                <AuthForm />
              </Route> */}
              <Route path="/Signup" component={Signup}/>
              <Private path="/test" component={TestPage}/>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  )
};

