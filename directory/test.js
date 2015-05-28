// this module will import the object 
// Parrot from parrot.js and print the string
// 'Hello!' from the speakEnglish function

// calling require with the path to Parrot object
// will return the value of the module.exports object
// from parrot.js, which is the Parrot object
var Parrot = require('./parrot');

var message = Parrot.speakEnglish();

console.log(message);