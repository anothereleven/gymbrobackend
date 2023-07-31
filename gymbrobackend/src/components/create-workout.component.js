import React, { Component } from 'react';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';




export default class CreateWorkout extends Component {
  constructor(props) {
    super(props);

    this.onChangeWorkoutname = this.onChangeWorkoutname.bind(this);
    this.onChangeReps = this.onChangeReps.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      workoutname: '',
      reps: '',
      weight: 0,
      comments: '',
    }
  }


  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeWorkoutname(e) {
    this.setState({
      workoutname: e.target.value
    })
  }

  onChangeReps(e) {
    this.setState({
      reps: e.target.value
    })
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    })
  }

  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const workout = {
      workoutname: this.state.workoutname,
      reps: this.state.reps,
      weight: this.state.weight,
      comments: this.state.comments
    }

    console.log(workout);

    axios.post('http://localhost:5000/workout/add', workout)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Record Workouts</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <TextField  type="text"
           autoFocus
           margin="dense"
           id="workoutname"
           label="Workout Name"
           fullWidth
           variant="standard"
           placeholder="workout"
              required
              className="form-control"
              value={this.state.workoutname}
              onChange={this.onChangeWorkoutname}
              />
        </div>
        <div className="form-group"> 
          <TextField  
              autoFocus
              margin="dense"
              id="reps"
              label="Reps"
              type="number"
              fullWidth
              variant="standard"
              placeholder="reps"  
              required
              className="form-control"
              value={this.state.reps}
              onChange={this.onChangeReps}
              />
        </div>
        <div className="form-group">
          <TextField 
               autoFocus
               margin="dense"
               id="weight"
               label="Weight(lb)"
               type="number"
               fullWidth
               variant="standard"
               placeholder="weight"   
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
              />
        </div>
        <div className="form-group">

          <TextField
               autoFocus
               margin="dense"
               id="comments"
               label="Comments"
               type="text"
               fullWidth
               variant="standard"
               placeholder="comments"  
              className="form-control"
              value={this.state.comments}
              onChange={this.onChangeComments}
              />
        </div>

        <div className="form-group">
          <Button variant="outlined" type="submit" value="Create Exercise Log" className="btn btn-primary">Record Workout</Button>
        </div>
      </form>
    </div>
    )
  }
}