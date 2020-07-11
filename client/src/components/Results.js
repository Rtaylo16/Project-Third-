
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { FcMoneyTransfer } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import Workinglate from "./images/walk.png"
import Walkingthecity from "./images/work.png"
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


class Results extends Component {


  render() {
    const finalValueOne =  localStorage.getItem('label')
    const finalValueTwo =  localStorage.getItem('label2')
    const finalJob = localStorage.getItem('job title')
    const lScoreOne= localStorage.getItem('living scores1')
    const hScoreOne= localStorage.getItem('house scores1')
    const sScoreOne= localStorage.getItem('startup scores1')
    const cScoreOne= localStorage.getItem('commute scores1')
    const eScoreOne= localStorage.getItem('education scores1')
    const lScoreTwo= localStorage.getItem('living scores2')
    const hScoreTwo= localStorage.getItem('house scores2')
    const sScoreTwo= localStorage.getItem('startup scores2')
    const cScoreTwo= localStorage.getItem('commute scores2')
    const eScoreTwo= localStorage.getItem('education scores2')
    const salary= localStorage.getItem('salary')
    return (
      <div>
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Workinglate} />
            <Card.Body>
              <Card.Title>{finalJob} in</Card.Title>
              <Card.Text>
              <h4>{finalValueOne}</h4>
              <FcMoneyTransfer/>Cost of Living Score: {lScoreOne} / 10
              <br></br>
              <FcDepartment/>Housing Score: {hScoreOne} / 10
              <br></br>
              <FcCommandLine/>Startups Score: {sScoreOne} / 10
              <br></br>
              <FcInTransit/>Commute Score: {cScoreOne} / 10
              <br></br>
              <FcGraduationCap/>Education Score: {eScoreOne} / 10
              <br></br>
             
              </Card.Text>
              {/* <Button variant="primary" href="/">Start over</Button> */}
              <AwesomeButton type="primary" href="/">Start over</AwesomeButton>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Walkingthecity} />
            <Card.Body>
              <Card.Title>{finalJob} in</Card.Title>
              <Card.Text>
              <h4>{finalValueTwo}</h4>
              <FcMoneyTransfer/>Cost of Living Score: {lScoreTwo} / 10
              <br></br>
              <FcDepartment/>Housing Score: {hScoreTwo} / 10
              <br></br>
              <FcCommandLine/>Startups Score: {sScoreTwo} / 10
              <br></br>
              <FcInTransit/>Commute Score: {cScoreTwo} / 10
              <br></br>
              <FcGraduationCap/>Education Score: {eScoreTwo} / 10
              <br></br>
              Current Average Salary: {salary} 
    </Card.Text>
            
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default Results;