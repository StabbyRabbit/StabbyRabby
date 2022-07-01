const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');

//gets all events from events_list table
router.get('/', homeController.getEvents, (req, res) => {
  // console.log(res.locals.events)
  return res.status(200).json(res.locals)
});

// router.delete('/', homeController.deleteEvent, (req, res) => {
//   // console.log(res.locals.events)
//   return res.status(200).json(res.locals.events);
// });

router.patch('/signUp', homeController.signUp, (req, res) => {
  // console.log(res.locals.events)
  return res.status(200).json(res.locals.signUp);
});

router.patch('/', homeController.updateEvent, (req, res) => {
  console.log(res.locals.updatedEvent);
  return res.status(200).json(res.locals.updatedEvent);
});

module.exports = router;
