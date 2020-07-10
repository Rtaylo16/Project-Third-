import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import LivingCost from "./components/LivingCost.js";
import Jobs from "./components/JobSelection";
import Results from "./components/Results";
//import  Background from "./components/images/CitiPicture.png";
import AuthContext from './context/authContext'
import desktopImage from './components/images/CitiPicture.png';
import mobileImage from './components/images/CitiPictureMob.png';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style/style.css'


export default function App() {

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('userLogin'))
    if (userData) {
      auth.onLogin(userData)
    }

  }, [])
  const [auth, setAuth] = useState({
    user: "",
    onLogin: function (userInfo) {
      setAuth(curr => ({ ...curr, user: userInfo }))
      sessionStorage.setItem('userLogin', JSON.stringify(userInfo))
    },
    onLogout: function () {
      setAuth(curr => ({ ...curr, user: "" }))
      sessionStorage.setItem('userLogin', "")
    },
    loaded: false
  })
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    }
}, []);

  return (

    <AuthContext.Provider value={auth}>
      <Router>
        <div className="main">
          <Header />
          <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="mainContent">
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}



              <Switch>
                <Route path="/Signup" component={Signup} />

                <Route path="/jobs">
                  <Jobs />
                </Route>
                <Route path="/LivingCost">
                  <LivingCost />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>

                {/* <Route path="/Button">
                <Button />
              </Route> */}


                <Route path="/results">
                  <Results />
                </Route>
                <Route path="/">
                  <Home />

                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>

  )
};


