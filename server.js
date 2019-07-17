'use strict';

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// Load config parameters into global
const { loadConfig } = require('./config/params');
const { generateBarcode } = require('./controllers/barcode-controller')
loadConfig();

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));

app.post('/barcode/generate',
    function (req, res) {
        generateBarcode(req, res);
    }
);

// Start listening for requests
app.listen(global.config.appDefaultPort,
    function () {
        console.log('barcode listening on port ', global.config.appDefaultPort);
    }
);