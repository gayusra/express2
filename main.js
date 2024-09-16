// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userroutes');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mvc_demo')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Use user routes
app.use(userRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
