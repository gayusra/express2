const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataControllers');

// Handle both GET and POST requests on the same URL
router.all('/users', dataController.showAndCreateUser);

// Route to get all users and display them
router.get('/dashboard', dataController.getUsers);

module.exports = router;
