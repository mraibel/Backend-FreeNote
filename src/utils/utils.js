const CryptoJS = require('crypto-js');

function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const randomBytes = CryptoJS.lib.WordArray.random(length).toString(); // Hexadecimal

    for (let i = 0; i < length; i++) {
        // Tomar cada byte de los valores hexadecimales y mapear a un carácter
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    
    return result;
}

module.exports = {
    generateRandomCode
}