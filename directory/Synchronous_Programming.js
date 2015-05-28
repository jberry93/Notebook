//Synchronous function = Blocks programs execution until its intended is produced
//'Blocks' refers to a second function will only run once the first function finishes

//Example of synchronous function:
console.log("Hello"); //this runs FIRST

console.log("Konnichiwa"); //this runs only AFTER 'Hello'

//Some functions are slow and some are fast:
readDataFromFile(); //slow function since it communicates with hard drive
//**hard drive is WAY slower than RAM**
readDateFromArray(); //fast function since it communicates with RAM

//Synchronous programming will make everything SLOWER because of blocking