var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

var favicon = require('serve-favicon');
var logger = require('morgan');


//Application
var app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Dev
app.use(logger('dev'));

//Api registration
app.use(require('./src/api/controllers/auth.local')(app));
app.use(require('./src/api/controllers/users'));
app.use(require('./src/api/controllers/static'));


//app.use(favicon(path.join(__dirname, 'favicon.ico')));


//Start server
var port = process.env.PORT || 3002;
var server = app.listen(port, function () {
    console.log("Listening on port", port);
});

