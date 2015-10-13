'use-strict';

var path = require('path');
var express = require('express');
var router = require('express').Router();

//Specify the assets to serve at /vendor
var serveVendorAssets = [
    //Node
    '/../../../node_modules/angular',
    '/../../../node_modules/bootstrap/dist/css',
    '/../../../node_modules/bootstrap/dist/js',
    '/../../../node_modules/jquery/dist',
    '/../../../node_modules/ui-router',

    //Bower
    '/../../../bower_components/angular-ui-notification/dist'
];

//Serve assets folder contents as if it was at root
serveVendorAssets.forEach(function(asset){
    router.use('/vendor', express.static(path.resolve(__dirname + asset)));
});

router.use(express.static(__dirname + '/../../../build'));

router.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../../../build/index.html'));
});

module.exports = router;