const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// Create an Express application.
const app = express();

// Connect to the database.
mongoose.connect('mongodb://localhost:27017/my_database');

// Set up a route to handle login requests.
app.post('/login', async (req, res) => {
  // Get the email and password from the request body.
  const email = req.body.email;
  const password = req.body.password;

  // Find the user with the given email address.
  const user = await User.findOne({ email });

  // If the user does not exist, return an error.
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Compare the given password to the user's hashed password.
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  // If the password is incorrect, return an error.
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  // Generate a JSON Web Token (JWT) for the user.
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Return the JWT to the client.
  res.json({ token });
});

// Set up a route to handle sign up requests.
app.post('/signup', async (req, res) => {
  // Get the name, email, and password from the request body.
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // Hash the password.
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user account.
  const user = new User({ name, email, password: hashedPassword });
  await user.save();

  // Generate a JSON Web Token (JWT) for the user.
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Return the JWT to the client.
  res.json({ token });
});

// Start the Express server.
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
