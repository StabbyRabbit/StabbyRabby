const express = require('express');
const eventController = require('../controllers/eventController')
const path = require('path');

const router = express.Router();

router.post('/', eventController.createEvent, (req, res) => {
    // console.log(res.locals.newEvent);
    return res.status(200).send(`Created new event: ${res.locals.newEvent}`);
})
  
module.exports = router;