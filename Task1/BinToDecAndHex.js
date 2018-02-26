'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Decimal number system: ' + BinToDec('1010010101011010001010010101101010111010') + '\n');
    res.write('Hexadecimal number system: ' + BinToHex('1010010101011010001010010101101010111010'));
    res.end();
}).listen(port);

let array = ['A', 'B', 'C', 'D', 'E', 'F'];
function BinToDec(number) {
    if(!rightNumber(number)) {
        return;
    }
    let digit = 0;
    for(let i = number.length-1; i >= 0; i--) {
        digit += number.charAt(i) * Math.pow(2,Math.abs(i - (number.length - 1)));
    }
    return digit;
} 
function BinToHex(number) {
    if(!rightNumber(number)) {
        return;
    }
    let digit = BinToDec(number);
    let result = "";
    do{
        let temp = Math.floor(digit % 16);
        digit = Math.floor(digit / 16);
        result = (temp >= 10 ? array[temp - 10] : temp) + result;
    } while(digit >= 16);
    result = (digit >= 10 ? array[digit - 10] : digit) + result;
    return result;
} 
function rightNumber(number) {
    number = String(number);
    for(let i = 0; i < number.length; i++) {
        if(number.charAt(i) != '0' && number.charAt(i) != '1') {
            return false;
        }
    }
    return true;
}