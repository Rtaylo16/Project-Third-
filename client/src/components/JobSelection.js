import React from "react";
import Dropdowns from './seconddropdown';
import Techsalary from "./salaries";



function JobSelect() {
   
    return (
        <div>
            <h2 class ="bill">What City would you like to live in?</h2>
            <Dropdowns />
            <Techsalary />


        </div>

    );
}

export default JobSelect;
