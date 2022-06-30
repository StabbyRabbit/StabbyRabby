const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const db = require('../models/databaseModel');

// First checks if user exists
// If user exists, reroutes to login page
// If user doesn't exist, creates new user in database
router.post('/', 
  userController.checkUserInputs, 
  userController.checkUserExists, 
  userController.redirectToLogin,
  userController.createUser, 
  (req, res) => {
//   console.log(res.locals.newUser )
    return res.status(200).json(`Created new user: ${res.locals.newUser}`);
});

// test query to check what's in database
router.get('/', (req, res) => {
    db.query(`SELECT user_name, password FROM users`)
        .then(data => {
            console.log(data.rows);
            return res.status(200).json(data.rows);
        }).catch(err => {
            return next({
                log: 'Error in get user middleware',
                status: 400,
                message: 'Error in get user middleware',
            });
        })
})

module.exports = router;