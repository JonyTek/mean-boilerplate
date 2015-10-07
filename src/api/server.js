var express = require("express");
var bodyParser = require("body-parser");

//Application
var app = express();
app.use(bodyParser.json());

//Api registration
app.use(require('./endpoints/users'));
app.use(require('./endpoints/static'));

//Start server
var port = process.env.PORT || 3000
var server = app.listen(port, function () {
    console.log("Listening on port", port);
});

