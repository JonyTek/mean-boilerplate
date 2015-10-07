'use-strict';

var path = require('path');
var express = require('express');
var router = require('express').Router();

//Specify the assets to serve at /vendor
var serveVendorAssets = [
  '/../../../node_modules/angular'
];

//Serve assets folder contents as if it was at root
serveVendorAssets.forEach(function(asset){
    router.use('/vendor', express.static(path.resolve(__dirname + asset)));
});

router.use(express.static(__dirname + '/../../../build'));
//router.use(express.static(__dirname + '/../../app/templates'));

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../../../build/index.html'));
});

module.exports = router;