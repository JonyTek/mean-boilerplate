var router = require('express').Router();
var User = require('../model/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var configure = function (app) {
    app.use(require('express-session')({
        secret: '!!mySecret!!',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    // passport config
    var passportConfig = {
        usernameField: 'email'
    };
    passport.use(new LocalStrategy(passportConfig, User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    return router;
};

router.post('/api/login', passport.authenticate('local'), function (req, res) {
    return res.status(200).json(req.user.session.details);
});

router.get('/api/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            return res.sendStatus(500);
        }

        return res.sendStatus(200);
    });
});

router.post('/api/register', function (req, res) {
    var newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        auth: {
            local: {
                username: req.body.email
            }
        }
    };

    User.register(new User(newUser), req.body.password, function (err, user) {
        if (err) {
            return res.status(401).json(err);
        }

        passport.authenticate('local', {session: true})(req, res, function () {
            return res.status(201).json(user.session.details);
        });
    });
});

module.exports = configure;