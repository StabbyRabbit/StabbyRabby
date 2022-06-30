const { home } = require('nodemon/lib/utils');
const db = require('../models/databaseModel');
const router = require('../routes/homeRouter');
const { response } = require('../server');

const eventController = {};

eventController.createEvent = (req, res, next) => {
    const { title, start_date, end_date, activity, max_participants, zip} = req.body;
    const queryStr = `
    INSERT INTO events_list ( title, start_date, end_date, activity, max_participants, zip ) 
    VALUES ('${title}', '${start_date}', '${end_date}', '${activity}', ${max_participants}, ${zip})
    RETURNING title`

    db.query(queryStr)
        .then(data => {
            res.locals.newEvent = data.rows[0].title;
            return next();
        }).catch(err => {
            return next({
                log: 'Error in create event middleware',
                status: 400,
                message: 'Please verify data input are correct type.',
            });
        })
}

module.exports = eventController;