import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CardContent, Grid, Typography, CardActions } from '@mui/material';
import { Button } from 'bootstrap';



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
const Workout1 = props => (
    <Card className="Workoutcard" sx={{margin:"10px", maxWidth:"1000px" , alignContent: "Left"}} variant="outlined">
      <CardContent>
       <Typography sx={{alignContent:"left"}}>{props.workout.workoutname}
       </Typography>     
       <Typography sx={{alignContent:"left"}}>x{props.workout.reps}
       </Typography>   
       <Typography sx={{alignContent:"left"}}>{props.workout.weight} lb
       </Typography> 
       <Typography sx={{alignContent:"left"}}>{props.workout.comments}
       </Typography>
       </CardContent>
      <CardActions>
      <button size="small" onClick={() => { props.deleteWorkout(props.workout._id) }}>Delete</button>
    </CardActions>
       
    
      
    </Card>
    
)
const Calender = props =>(
<DateCalendar
  defaultValue={initialValue}
  loading={isLoading}
  onMonthChange={handleMonthChange}
  renderLoading={() => <DayCalendarSkeleton />}
  slots={{
    day: ServerDay,
  }}
  slotProps={{
    day: {
      highlightedDays,
    } as any,
  }}
/>
)

export default class WorkoutList extends Component {
  constructor(props) {
    super(props);

    this.deleteWorkout = this.deleteWorkout.bind(this)

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

  deleteWorkout(id) {
    axios.delete('http://localhost:5000/workout/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      workout: this.state.workout.filter(el => el._id !== id)
    })
  }

  workoutList() {
    return this.state.workout.map(currentworkout => {
      return <Workout1 workout={currentworkout} deleteWorkout={this.deleteWorkout} key={currentworkout._id}/>;
    })
  }

  render() {
    return (
      <Box className='recorded-heading'>
        <Typography sx={{p: 2}}>Recorded Workouts</Typography>
            { this.workoutList() }
      </Box>
    )
  }
}