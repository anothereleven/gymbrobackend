import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes} from "react-router-dom";
import WorkoutList from './components/workout-list.component';
import { AppBar, Box } from '@mui/material/';
import { Grid } from '@mui/material/';
import AppBarr from './components/app-bar';
import {Container} from '@mui/material/';
import CreateWorkout from './components/create-workout.component';
import "bootstrap/dist/css/bootstrap.min.css" 
import Navbar from './components/app-bar';
import BMICalculator from './components/bmi-calculator';




function App() {
  return (
    <Container>
      <Navbar />
    <Routes>
      <Route path="/" element={<WorkoutList/>} /> {//always use element and not component(component is deprecated)
}
      <Route path="/create" element={<CreateWorkout/>} /> {//always use element and not component(component is deprecated)
}      
      <Route path="/BMI" element={<BMICalculator/>} /> {//always use element and not component(component is deprecated)
}
    
      {//<WorkoutList/>
}   </Routes>
    </Container>
  );
}

export default App;
