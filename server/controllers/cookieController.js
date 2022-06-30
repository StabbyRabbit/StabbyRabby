const db = require('../models/databaseModel');

const cookieController = {};

cookieController.setCookie = async (req,res,next) => {
    res.cookie('secret', Math.floor(Math.random()*100).toString());
    return next();
}

cookieController.setSSIDCookie = async (req, res, next) => {
    const { username, password } = req.body;
    const hashPwQuery = `SELECT password FROM users WHERE user_name = $1`;
    const params = [user_name];
    const hashedPw = await db.query(hashPwQuery, params);
    // console.log(hashedPw.rows[0].password);
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
})}

module.exports = cookieController;