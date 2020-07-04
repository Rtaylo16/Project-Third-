import React, { Component } from 'react';
import axios from 'axios';

class Techsalary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }
    makesalary(slug) {
        axios.get(`https://api.teleport.org/api/urban_areas/slug:${slug}/salaries/`)
            .then(results => {
                console.log(results)
                const filteredata = results.data.salaries.filter(salary=>{
                    if(salary.job.id === "UX-DESIGNER"){
                        return true

                    }
                    if (salary.job.id === "WEB-DEVELOPER"){
                        return true
                    }
                    if(salary.job.id === "MOBILE-DEVELOPER"){
                        return true
                    }

                    return false
                })
                this.setState({salaries:
                    filteredata
                })
                }
               

                


            )

    }

    componentDidMount (){
        this.makesalary(this.props.slug)
    }
    render(){
        console.log(this.state.salaries)
    return(<p>yum</p>)
        
    }

 

}

export default Techsalary;