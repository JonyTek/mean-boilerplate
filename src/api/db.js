var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/startupSource", function () {
    console.log("mongo connected");
});

module.exports = mongoose;