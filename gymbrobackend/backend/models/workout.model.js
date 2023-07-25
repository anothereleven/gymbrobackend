const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  workoutname: { type: String, required: true },
  reps: { type: String, required: true },
  weight: { type: Number, required: true },
  comments: { type: String, required: true },
}, {
  timestamps: true,
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;