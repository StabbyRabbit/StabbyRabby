// const {home} = require('nodemon/lib/utils');
const db = require('../models/databaseModel');
// const router = require('../routes/homeRouter');

const homeController = {};

homeController.getEvents = async (req, res, next) => {
  const queryStr = 'SELECT * FROM events_list';
  const queryParStr = 'SELECT * FROM participants'
  try{
    const events = await db.query(queryStr);
    const participants = await db.query(queryParStr);
    res.locals.events = events.rows;
    res.locals.participants = participants.rows
    return next();
  } catch (err) {
    next({
          log: 'Error in get events middleware',
          status: 400,
          message: 'Unable to retrieve events.',
      });
    };
};

//max number - #of participants in participant table
homeController.updateEvent = (req, res, next) => {
  const data = req.body;
  const columnNames = Object.keys(data);
  const values = Object.values(data);
  let subStr = '';
  columnNames.forEach((elem, idx) => {
    if (elem !== 'id') {
      if (idx !== columnNames.length - 1) {
        if (typeof values[idx] === 'number') {
          subStr += ` ${elem} = ${values[idx]},`;
        } else {
          subStr += ` ${elem} = '${values[idx]}',`;
        }
      } else {
        if (typeof values[idx] === 'number') {
          subStr += ` ${elem} = ${values[idx]}`;
        } else {
          subStr += ` ${elem} = '${values[idx]}'`;
        }
      }
    }
  });
  // subStr = 'columnName1 = value[1], columnName2 = value[2]'

  const queryStr = `UPDATE events SET ${subStr} WHERE id = ${data.id} RETURNING id`;

  db.query(queryStr)
    .then(() => {
      console.log(data);
      res.locals.updatedEvent = data;
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in get update events middleware',
        status: 400,
        message: 'Unable to update events.',
      });
    });
};

homeController.signUp = (req, res, next) => {
  const {name, id} = req.body;
  const queryStr = `UPDATE events SET participants = ARRAY_APPEND(participants, '${name} '), num_participants = num_participants - 1 WHERE id = ${id}; RETURNING id`;
//RETURN
  db.query(queryStr)
    .then(() => {
      console.log(name, id);
      res.locals.signUp = [name, id];
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in get update sign up middleware',
        status: 400,
        message: 'Unable to add to sign up for event.',
      });
    });
};

// id	title	date	start_time	end_time	activity_type	num_participants	zip	participant_id	comment_id

module.exports = homeController;
