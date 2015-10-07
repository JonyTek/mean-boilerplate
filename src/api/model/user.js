var db = require('../db');

var user = db.Schema({
    username: {type: String},
    password: {type: String, select: false}
});

module.exports = db.model('User', user);