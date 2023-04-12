const users = require('../models/usermodel');
const bcrypt = require('bcrypt');

//Registering user into database and hashing password of a user
const registerUser = async (req, res) => {
  try {
    // 1) Hash the password of a user using bcrypt js
    // 2) Check if the confirmpassword mathes the password
    // 3) If the confirmpassword===password then store the document of a user
    // 4) If the confirmpassword!=password then status should be 404 with the message 'Incorect Data'
  } catch (error) {
    res.status(404).send(error);
  }
};

//Checking if the user exists
const loginUser = async (req, res) => {
  try {
    // 1) For login user will provide email and password
    // 2) check if the user exists in the database
    // 3) Also check if the password mathes with the hashed password of the database
    // 4) If user email exists and password matches with the db then show res.send('successful Login')
    // 5) If the user Data is incorrect show res.send('Error Details Incorrect')
  } catch (error) {
    res.status(404).send(error);
  }
};

// Logout User
const logoutUser = async (req, res) => {
  try {
    // 1) Using req.params.id require that document id which needs to be deleted
    // 2) Check if the email mathes with that id document
    // 3) If the email mathes than delete that document of a user and send ('User Deleted')
    // 4) If error occurs while deleting user show Error deleting User
  } catch (error) {
    res.status(404).json(error);
  }
};

//Updating Password
const updatePasword = async (req, res) => {
  try {
    // 1) Using req.params.id require that document id which password needs to be Updated
    // 2) Check if the email===req.body.email
    // 3) If the db email mathes the req.body.email than using findByIdAndUpdate update old password with the new password
    // 4) If the password updated successfully then show updated password as a result
    // 5) If the email is not valid then show res.send('Email not valid')
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { registerUser, loginUser, logoutUser, updatePasword };
