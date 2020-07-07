import React from "react";
import Mobileicon from "./images/Mobileicon.png"
import UXicon from "./images/UXicon.png"
import Webdevelop from "./images/Webdevelopicon.png"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Dropdowns from './seconddropdown';
import Techsalary from "./salaries";



function JobSelect (){
    return(
    <div>
      <h2>What City would you like to live in?</h2>
      <Dropdowns/>
      <Techsalary/>
      



</div>

    );
}

export default JobSelect;
