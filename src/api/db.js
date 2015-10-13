var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mean-bp", function () {
    console.log("mongo connected");
});

module.exports = mongoose;