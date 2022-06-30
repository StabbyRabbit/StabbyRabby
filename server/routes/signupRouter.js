const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const db = require('../models/databaseModel');

//first checks if user exists. if user doesn't exist, creates new user in database
router.post('/', userController.checkUserExists, userController.createUser, (req, res) => {
//   console.log(res.locals.newUser )
  return res.status(200).json(`Created new user: ${res.locals.newUser}`);
});

// router.get('/', (req, res) => {
//     db.query(`SELECT user_name, password FROM users`)
//         .then(data => {
//             console.log(data);
//             return res.status(200).json(data.rows);
//         }).catch(err => {
//             return next({
//                 log: 'Error in get user middleware',
//                 status: 400,
//                 message: 'Error in get user middleware',
//             });
//         })
// })

module.exports = router;