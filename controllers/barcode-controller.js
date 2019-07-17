'use strict';

const { stringToBarcode } = require('../services/barcode-service')

const generateBarcode = (req, res) => {
    try {
        console.log("texto Original: " + req.body.texto)
        stringToBarcode(req.body.texto)
            .then(function (value) {
                console.log('barcode:')
                console.log('--------------------')
                console.log(value)
                console.log('--------------------')
                res.status(200).send(value);
            })        
    } catch (error) {
        // Error al procesar la solicitu de generación de tarjeta.
        res.status(400).send(error);
    }
}

module.exports.generateBarcode = generateBarcode;