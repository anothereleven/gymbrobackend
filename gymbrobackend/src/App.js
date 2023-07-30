import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Route, Router} from "react-router-dom";
import WorkoutList from './components/workout-list.component';
import { Box } from '@mui/material/';
import { Grid } from '@mui/material/';


function App() {
  return (
    <Box>
   {/*} <Router>
      <div>
      <Navbar />
        <br/>
        <Route path="/" exact component={WorkoutList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        </div>
  </Router>*/}
  
  <Grid container sx={{marginTop:"100px"}}>

  <Grid item xs ={2}>
    </Grid>
    <WorkoutList/>
    </Grid>
    

  </Box>

  );
}

export default App;
