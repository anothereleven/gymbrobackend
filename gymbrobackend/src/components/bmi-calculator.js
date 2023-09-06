import React, { Component } from 'react';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';

export default class BMICalculator extends Component {
  constructor(props) {
    super(props);

    this.onChangeBodyWeight = this.onChangeBodyWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.calculateBMI=this.calculateBMI.bind(this);

    this.state = {
      bodyweight: '',
      height: ''
    }
  }

  onChangeBodyWeight(e) {
    this.setState({
      bodyweight: e.target.value
    })
  }

  onChangeHeight(e) {
    this.setState({
      height: e.target.value
    })
  }

  calculateBMI(){
    if (this.state.bodyweight && this.state.height){
        let height= this.state.height;
        let bodyweight= this.state.bodyweight;
        var bmi =(bodyweight / (height * height));
        bmi = bmi.toFixed(2);
        return bmi;
    }
  }
  getBMIResults(bmi){
    let bmiResults = {
      label: '',
      alertClass: '',
    };
    
    if (bmi <= 18.5){
      bmiResults.label = 'Underweight';
      bmiResults.alertClass = 'alert-danger';
    } 
    else if (bmi <= 24.9) {
      bmiResults.label = 'Normal weight';
      bmiResults.alertClass = 'alert-success';
    }
    else if (bmi <= 29.9){
      bmiResults.label = 'Overweight';
      bmiResults.alertClass = 'alert-warning';
    }
    else if (bmi >= 30) {
      bmiResults.label = 'Obesity';
      bmiResults.alertClass = 'alert-danger';
    } else {
      bmiResults.label = 'BMI';
      bmiResults.alertClass = 'alert-primary';
    }
    return bmiResults;
  }

  render() {

    let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);

    return (
    <div>
      <h3>BMI Calculator</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <TextField  type="number"
           autoFocus
           margin="dense"
           id="bodyweight"
           label="Enter your Weight (in kg)"
           fullWidth
           variant="standard"
           placeholder="Bodyweight kg"
              required
              className="form-control"
              value={this.state.bodyweight}
              onChange={this.onChangeBodyWeight}
              />
        </div>
        <div className="form-group"> 
          <TextField  
              autoFocus
              margin="dense"
              id="height"
              label="Enter your height (in meters)"
              type="number"
              fullWidth
              variant="standard"
              placeholder="height (in m)"  
              required
              className="form-control"
              value={this.state.height}
              onChange={this.onChangeHeight}
              />
        </div>
        <div>
        <BmiDisplay bmi={bmi} label={results.label} alertClass={results.alertClass} />
            </div>
       

       
      </form>
    </div>
    )
  }
}

function BmiDisplay(props){
    return (
      <div className={"bmi-result alert " + props.alertClass}>
        <div>{ props.bmi || '--.-' }</div>
        <div>{ props.label }</div>
      </div> 
    )
  }