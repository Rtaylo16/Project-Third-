
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'


class Results extends Component {


  render() {
    const finalValueOne =  localStorage.getItem('label')
    const finalValueTwo =  localStorage.getItem('label2')
    const finalJob = localStorage.getItem('job title')
    const score= localStorage.getItem('scores')
    const scoreTwo= localStorage.getItem('scores2')
    const salary= localStorage.getItem('salary')
    return (
      <div>
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{finalJob} in</Card.Title>
              <Card.Text>
              <h4>{finalValueOne}</h4>
               Cost of Living Score: {score} / 10
               <br></br>
              Current Average Salary: {salary} 
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{finalJob} in</Card.Title>
              <Card.Text>
              <h4>{finalValueTwo}</h4>
              Cost of Living Score: {scoreTwo} / 10
    </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default Results;