const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const taskRoutes = require('./routes/route');
const mongoose = require('mongoose');
const MongoDb_URI = process.env.MONGODB_URI;

const AuthRoutes = require('./routes/auth.route');

mongoose.connect(MongoDb_URI, {


}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const PORT = process.env.PORT;


app.use(cors());

app.use(express.json());

app.use('/tasks', taskRoutes);

app.use('/', AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
