const db = require('../models/databaseModel');

const cookieController = {};

cookieController.setCookie = async (req,res,next) => {
    res.cookie('ssid', Math.floor(Math.random()*10000).toString(), {httpOnly:true});
    return next();
}

module.exports = cookieController;