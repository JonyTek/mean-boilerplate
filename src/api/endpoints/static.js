'use-strict';

var path = require('path');
var express = require('express');
var router = require('express').Router();

//Specify the assets to serve at /vendor
var serveVendorAssets = [
    '/../../../node_modules/angular',
    '/../../../node_modules/bootstrap/dist/css',
    '/../../../node_modules/ui-router'
];

//Serve assets folder contents as if it was at root
serveVendorAssets.forEach(function(asset){
    router.use('/vendor', express.static(path.resolve(__dirname + asset)));
});

router.use(express.static(__dirname + '/../../../build'));

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../../../build/index.html'));
});

module.exports = router;