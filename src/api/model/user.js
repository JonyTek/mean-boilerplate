var db = require('../db');
var passportLocalMongoose = require('passport-local-mongoose');

var user = db.Schema({
    firstname: String,
    lastname: String,
    email: String,
    auth: {
        local: {
            username: String,
            password: String,
            salt: String
        }

    }
});

user.virtual('fullname').get(function () {
    return this.firstname + ' ' + this.lastname;
});

user.virtual('session.details').get(function () {
    return {
        fullname: this.fullname,
        email: this.email,
        id: this._id
    };
});

user.virtual('profile.details').get(function () {
    return this;
});

var authOptions = {
    usernameField: 'auth.local.username',
    saltField: 'auth.local.salt',
    hashField: 'auth.local.password'
};

user.plugin(passportLocalMongoose, authOptions);

module.exports = db.model('User', user);