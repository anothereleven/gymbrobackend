const router = require('express').Router();
let Workout = require('../models/workout.model');

router.route('/').get((req, res) => {
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const workoutname = req.body.workoutname;
  const reps = Number(req.body.reps);
  const weight = Number(req.body.weight);;
  const comments = req.body.comments;

  const newWorkout = new Workout({
   workoutname,
   reps,
   weight,
   comments
  });

  newWorkout.save()
  .then(() => res.json('Workout added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Workout.findById(req.params.id)
    .then(exercise => {
      workout.workout =req.body.workout;
      workout.reps =Number(req.body.reps);
      workout.weight = Number(req.body.weight);
      workout.comments = req.body.comments;

      workout.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;