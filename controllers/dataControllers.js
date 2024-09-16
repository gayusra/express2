const User = require('../models/user');

// Show form to add a new user and handle form submission
exports.showAndCreateUser = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, age } = req.body;
    console.log(req.body)
    
    // Check if any field is missing
    /*if (!name || !email || !age) {
      // Render the form with an error message if validation fails
      return res.render('users', { error: 'All fields are required!' });
    }*/

    try {
      // Create and save the new user
      const newUser = new User({ name, email, age });
      await newUser.save();
      
      // Redirect to a list of users after submission
      return res.redirect('/dashboard');
    } catch (err) {
      return res.status(500).send("Server Error");
    }
  } else {
    // Render the form when GET request is made
    res.render('users'); // Render the form page for GET request
  }
};

// Show all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render('listuser', { users });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
