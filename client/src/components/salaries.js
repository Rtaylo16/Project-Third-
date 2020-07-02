import React, { Component } from 'react';

class Techsalary extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch("https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/salaries/")
            .then((results => {
                console.log(results)
                return results.json();
                
                })
                .then((resultsdata) => {
                    let salary = resultsdata.salaries[Math.floor(Math.random()*resultsdata.salaries.length)];;
                    let jobtitle = salary.job.title;
                    let amount = salary.salary_percentiles.percentile_75;

                    this.setState({
                        position: jobtitle,
                        salaryamount: amount
                    });
                    
                })

                


            )

    }

    render(){

    return(<p>yum</p>)
        
    }

 

}

export default Techsalary;