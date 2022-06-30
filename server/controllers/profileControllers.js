const {home} = require('nodemon/lib/utils');
const db = require('../models/databaseModel');
const router = require('../routes/profileRouter');

const profileController = {};

profileController.getEvents = (req, res, next) => {
    const queryStr = 'SELECT * FROM events_list';

    const profileQueryStr = 'SELECT * FROM events_list WHERE'
  //RETURN
    db.query(queryStr)
      .then((data) => {
        res.locals.events = data.rows;
        return next();
      })
      .catch((err) => {
        next({
          log: 'Error in get events middleware',
          status: 400,
          message: 'Unable to retrieve events.',
        });
     });
};
  

profileController.deleteEvent = (req, res, next) => {
    const { id } = req.body
    const queryStr = `DELETE FROM events_list WHERE id = ${id} RETURNING id`;
  //RETURN
    db.query(queryStr)
      .then((data) => {
        res.locals.events = data.rows;
        return next();
      })
      .catch((err) => {
        next({
          log: 'Error in get events middleware',
          status: 400,
          message: 'Error deleting event',
        });
      });
};

profileController.updateEvent = (req, res, next) => {
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


module.exports = profileController