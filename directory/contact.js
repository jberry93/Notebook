// this will have an object named 'contact'
// which will have a method called 'parseName(str)'
// 'str' will represent a name and a phone number
// separated by a comma. 'parseName' will extract
// and return the name in 'str'.

var Contact = {};

Contact.parseName = function(str){
	var parts = str.split(',');
	return parts[0];
}; // calling 'str.split(',')' will create an array
// separated by a comma. Since we want just the name,
// we use 'parts[0]' to call the first position of
// the array.

Contact.parseNumber = function(str){
	var parts = str.split(',');
	return parts[1];
};

Contact.createContact = function(str){
	var contact = {
		name: this.parseName(str),
		number: this.parseNumber(str)
	};
	return contact;
};

Contact.loadContacts = function(done){
	//Need to use asynchronous programming for speed!
	//Communicate results via callback function which will be passed as an argument named 'done'
	var jsonfile = require("jsonfile");
	jsonfile.readFile('data.json', function(err, data){
		done(err,data);
	})
};

Contact.saveContacts = function(contacts, done){
	var jsonfile = require('jsonfile');
	//contacts = [{name:"John Smith",number:"604-123-9090"}];
	jsonfile.writeFile('data.json',contacts,function(err){
		done(err);
	});
};

//Will append the given contact object to the data.json file.
//Since 'saveContact(contact,done)' reads and writes on the
//data.json file, we have to implement it asynchronously.
//Begin by adding the method 'saveContact' to the contact 
//object 'Contact'. The 'contact' argument will hold the
//name and number of the contact that will be appended. The
//'done' argument is the callback function that will be called
//once the contact is successfully appended. In order to append
//the contact object, we need to load the existing contacts from
//our existing data.json file through the 'loadContacts' method
//provided by the 'Contact' object. 'loadContacts' is an
//asynchronous function whose only argument is the callback function
//which is defined as an anonymous function. This anonymous function
//has 2 arguments: 'err' and 'contacts'. 'err' represents the possible
//error encountered while loading the contacts from data.json. 
//'contacts' represents the array of contact objects loaded from the
//file. If 'loadContacts' encounters an error then 'saveContact'
//fails too. We can then call its callback 'done' and pass the 'err'
//to it. If no error is encountered then the 'contacts' element is
//the array of contact objects from data.json. Next we append the new
//contact object to the 'contacts' array using the 'push' method.
//Finally, write the updated contacts array into data.json file using
//the 'saveContacts' method from object 'Contact'. Its first argument
//'contacts' is an array that we save to data.json and the second
//argument 'done' is the callback function that is called once the 
//the save operation is complete. Since the second 'this' is within
//an anonymous function, the second 'this' is not a reference to
//'saveContact'. That is why we use '_this' to refer the second 'this'
//to 'saveContact'.
Contact.saveContact = function(contact, done){
	var _this = this;
	this.loadContacts(function(err,contacts){
		if(err){
			return done(err);
		}else{
		contacts.push(contact);
		_this.saveContacts(contacts,done);
		};
	});
};

Contact.findContacts = function(name,done){
	name = "John Smith";
	this.loadContacts(function(err,contacts){
		if(err){
			return done(err);
		}else{
		contacts.filter(function(foundContact){
			foundContact.push(contacts);
		});
		done(err,foundContact);
		};
	});
};

module.exports = Contact;
//exports contact.js to whatever is referring to it