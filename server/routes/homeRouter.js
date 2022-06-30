const express = require('express');

const homeController = require('../controllers/homeControllers');

const router = express.Router();

// handle requests functions
router.get('/', homeController.getEvents, (req, res) => {
  // console.log(res.locals.events)
  res.status(200).json(res.locals.events);
});


router.patch('/signUp', homeController.signUp, (req, res) => {
  // console.log(res.locals.events)
  res.status(200).json(res.locals.signUp);
});



module.exports = router;
