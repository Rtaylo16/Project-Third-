import React, { Component } from 'react';
import axios from 'axios';
import Mobileicon from "./images/Mobileicon.png"
import UXicon from "./images/UXicon.png"
import Webdevelop from "./images/Webdevelopicon.png"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

class Techsalary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    makesalary(slug = "charlotte") {
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

    handleClick(salaries){
       this.makesalary(salaries)


    }


    render(){
      const valoo = localStorage.getItem('value');
        // console.log(this.state.salaries)
    return(
        <div>
        
        <h2>What Tech Job are you in currently?</h2>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src= {Mobileicon} />
            <Card.Body>
              <Card.Title>Mobile Developer</Card.Title>
              <Card.Text>
                Mobile Developer specialise in mobile technology such as building apps for Google's Android, Apple's iOS and Microsoft's Windows Phone platforms. 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger" onClick={()=>this.handleClick()}>Pick this Job!</Button>{' '}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src= {UXicon} />
            <Card.Body>
              <Card.Title>UX Designer</Card.Title>
              <Card.Text>
                {valoo} 
                <br></br>
              In a nutshell, the UX designer is responsible for how a product or website feels.
              The UX designer's job is to zero in on users' underlying emotional and functional needs.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger" >Pick this Job!</Button>{' '}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Webdevelop} />
            <Card.Body>
              <Card.Title>Web Developer</Card.Title>
              <Card.Text>
              A Web Developer is responsible for the coding, design and layout of a website according to a company's specifications.
              As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming is necessary.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger" > 
        Pick this Job!</Button>{' '}
            </Card.Footer>
          </Card>
        </CardGroup> 
        </div>
        
        )
        
    }

 

}

export default Techsalary;