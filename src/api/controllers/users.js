var router = require('express').Router();
var User = require('../model/user');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    return res.sendStatus(401);
}

router.get('/api/user', isLoggedIn, function (req, res, next) {
    var query = {
        email: req.user.email
    };

    User.findOne(query, function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.sendStatus(401);
        }

        res.json(user);
    });
});

module.exports = router;