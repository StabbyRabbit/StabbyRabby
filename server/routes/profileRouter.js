const express = require('express');

const profileControllers = require('../controllers/profileControllers');

const router = express.Router();

router.delete('/', profileControllers.deleteEvent, (req, res) => {
    console.log("got inside delete event")
    res.status(200).json(res.locals.events);
});

router.patch('/', profileControllers.updateEvent, (req, res) => {
  console.log(res.locals.updatedEvent);
  res.status(200).json(res.locals.updatedEvent);
});

module.exports = router;