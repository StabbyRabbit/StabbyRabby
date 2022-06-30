const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

//gets all events from events_list table
router.get('/', loginController.get, (req, res) => {
  // console.log(res.locals.events)
//   return res.status(200).json(res.locals.);
});

module.exports = router;
