import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, Grid, Typography, CardActions } from '@mui/material';


const Workout = props => (
    <tr>
    <td>{props.workout.workoutname}</td>
    <td>{props.workout.reps}</td>
    <td>{props.workout.weight}</td>
    <td>{props.workout.comments}</td>
    {/*<td>
      <Link to={"/edit/"+props.workout._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.workout._id) }}>delete</a>
</td>*/}
  </tr>
    
)

export default class WorkoutList extends Component {
  constructor(props) {
    super(props);

    //this.deleteWorkout = this.deleteWorkout.bind(this)

    this.state = {workout: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/workout/')
      .then(response => {
        this.setState({ workout: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //deleteExercise(id) {
    //axios.delete('http://localhost:5000/workout/'+id)
      //.then(response => { console.log(response.data)});

    //this.setState({
      //exercises: this.state.workout.filter(el => el._id !== id)
    //})
  //}

  workoutList() {
    return this.state.workout.map(currentworkout => {
      return <Workout workout={currentworkout} deleteExercise={this.deleteWorkout} key={currentworkout._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Recorded Workouts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Workout</th>
              <th>Reps</th>
              <th>Weight</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.workoutList() }
          </tbody>
        </table>
      </div>
    )
  }
}