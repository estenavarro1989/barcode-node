const bwipjs = require('bwip-js')

const stringToBarcode = (originalText) => {
    return new Promise(function (resolve, reject) {
        bwipjs.toBuffer({
            bcid: 'code39',
            text: originalText,
            scale: 1,
            height: 12,
            includetext: false,
            textxalign: 'center',
            textfont: 'Inconsolata',
            textsize: 9
        }, function (err, stream) {
            if (!err) {
                resolve('data:image/jpeg;base64,'.concat(stream.toString('base64')));
            } else {
                resolve(null);
            }
        })
    })
}

module.exports.stringToBarcode = stringToBarcode;