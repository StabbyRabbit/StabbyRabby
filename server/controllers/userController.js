const db = require('../models/databaseModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.checkUserExists = async (req, res, next) => {
    const {user_name, password} = req.body;
    //make sure user has inputted username and password
    if(!user_name || !password){
        return next({
            log: 'User input missing username and/or password',
            status: 400,
            message: 'Missing username and/or password',
        });
    } 
    //checking if username/password combo exists in database
    const hashPwQuery = `SELECT password FROM users WHERE user_name = $1`;
    const params = [user_name];
    const hashedPw = await db.query(hashPwQuery, params);
    // console.log(hashedPw.rows[0].password);
    bcrypt.compare(password, hashedPw.rows[0].password, (err, result) => {
        // console.log(result);
        if(err) {
            return next({
                log: 'Error in create user middleware',
                status: 400,
                message: 'Error in create user middleware',
            });
        }
        if(result === true){
            return res.redirect('/login');
        } else {
            return next();
        }
    })
}

userController.createUser = (req, res, next) => {
    const { first_name, last_name, user_name, password, zip, profile_picture_url } = req.body;   
    //has password and store in database
    const hashedPw = bcrypt.hashSync(password, 12);
    const queryStr = `
    INSERT INTO users ( first_name, last_name, user_name, password) 
    VALUES ('${first_name}', '${last_name}', '${user_name}', '${hashedPw}')
    RETURNING user_name`
    db.query(queryStr)
        .then(data => {
            // console.log(data.rows[0].user_name);
            res.locals.newUser = data.rows[0].user_name;
            return next();
        }).catch(err => {
            return next({
                log: 'Error in create user middleware',
                status: 400,
                message: 'Error in create user middleware'
            });
        })
}

module.exports = userController;