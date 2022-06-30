const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors")
const cookieParser = require('cookie-parser');

const PORT = 3000;

const homeRouter = require('./routes/homeRouter');
const createEventRouter = require('./routes/createEventRouter');
const profileRouter = require('./routes/profileRouter');
const { urlencoded } = require('body-parser');


const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/home', homeRouter);
app.use('/createEvent', createEventRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/profile', profileRouter)


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page does not exist.'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, console.log(`listening on port ${PORT}...`));

module.exports = app;