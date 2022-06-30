const db = require('../models/databaseModel');
const bcrypt = require('bcrypt');

// const server = require('../server/server');

const userController = {};

//make sure user has inputted username and password
userController.checkUserInputs = (req, res, next) => {
    const {user_name, password} = req.body;
    if(!user_name || !password){
        return next({
            log: 'User input missing username and/or password',
            status: 400,
            message: 'Missing username and/or password',
        });
    } 
    return next();
}

//check whether username/password combo exists in database
userController.checkUserExists = async (req, res, next) => {
    const {user_name, password} = req.body;
    const hashPwQuery = `SELECT password FROM users WHERE user_name = $1`;
    const params = [user_name];
    const hashedPw = await db.query(hashPwQuery, params);
    console.log(hashedPw.rows[0]);
    bcrypt.compare(password, hashedPw.rows[0].password, (err, result) => {
        console.log(result);
        if(err) {
            return next({
                log: 'Error in create user middleware',
                status: 400,
                message: 'Error in create user middleware',
            });
        }
        res.locals.userExists = result;
        return next();
    })
}

//redirecting to login page
userController.redirectToLogin = async (req, res, next) => {
    console.log('login middleware: ', res.locals.userExists)
    if(res.locals.userExists === true){
        return res.redirect('/login');
        // res.redirect('https://google.com/');
    } else {
        return next();
    }
}

//redirect to home page
userController.redirectToHomePage = async (req, res, next) => {
    if(res.locals.userExists === true){
        console.log(res.locals.userExists)
        return res.redirect('/');
    } else {
        return next();
    }
}

userController.createUser = (req, res, next) => {
    // const { first_name, last_name, user_name, password, zip, profile_picture_url } = req.body;   
    const { user_name, password } = req.body;   
    //has password and store in database
    const hashedPw = bcrypt.hashSync(password, 12);
    const queryStr = `
    INSERT INTO users ( user_name, password ) 
    VALUES ('${user_name}', '${hashedPw}')
    RETURNING user_name`
    // const queryStr = `
    // INSERT INTO users ( first_name, last_name, user_name, password) 
    // VALUES ('${first_name}', '${last_name}', '${user_name}', '${hashedPw}')
    // RETURNING user_name`
    db.query(queryStr)
        .then(data => {
            // console.log(data.rows[0].user_name);
            res.locals.newUser = data.rows[0].user_name;
            return next();
        }).catch(err => {
            return next({
                log: 'Error in create user middleware',
                status: 400,
                message: 'Please fill in all fields'
            });
        })
}

module.exports = userController;