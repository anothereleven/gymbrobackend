const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const workoutRouter = require('./routes/workout');
app.use('/workout', workoutRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});