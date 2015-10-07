var router = require('express').Router();
var User = require('../model/user');

router.get('/api/user', function (req, res, next) {
    var query = {
        username: req.query.username
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

router.post('/api/user', function (req, res, next) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function (err) {
        if (err) {
            next(err);
        }
        res.sendStatus(201);
    });
});

module.exports = router;