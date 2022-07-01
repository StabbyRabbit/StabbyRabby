const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const db = require('../models/databaseModel');

// // redirect to login page
// router.get('/', (req, res) => {
//     // console.log(res.locals.newUser )
//     return res.status(200).json(`Redirected to login page`);
// });

// First checks if user exists
// If user exists, reroutes to home page
// If user doesn't exist, returns error message
router.post('/', 
  userController.checkUserInputs, 
  userController.checkUserExists, 
  // userController.redirectToHomePage,
  (req, res) => {
    console.log(res.locals.userExists)
    return res.status(200).json(res.locals.userExists);
});

module.exports = router;
