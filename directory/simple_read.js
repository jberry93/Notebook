//Asynchronous Programming

//This will read the content of data.json and print it to console
//Need to use asynchronous function 'readFile' provided
//by the 'fs' module. 'fs' is part of the core Node.js
//modules which can be used as:
var fs = require('fs');

//When using 'readFile', we need to pass it an option
//object that specifies the encoding of the file to be read.
//Since data.json is a text file, need to set its encoding
//to 'utf-8':
var options = {
	encoding:'utf-8'
};
//'err' = Prints an error
//'data' = Prints out the content
function notifyRead(err, data){
	console.log("Read Complete!");
	console.log(data);
};

fs.readFile('data.json', options, notifyRead)