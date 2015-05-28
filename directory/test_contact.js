var Contact = require("./contact"); //refers to contact.js

//var name = Contact.parseName("Johnny Bravo, 777-333-1800");
// console.log(name);

//var number = Contact.parseNumber("Johnny Bravo, 777-333-1800");
// console.log(number);

//var contact = Contact.createContact("Johnny Bravo, 777-333-1800");
// console.log(contact);

//Contact.loadContacts(function(err,data){
//	console.log(data);
//});

var contacts = [{name:"John Smith", number:"604-123-9090"}];

//Contact.saveContacts(contacts,function(err){
//	console.log('success');
//});

//Contact.saveContact(contact,function(err){
//	console.log('success');
//});

Contact.findContacts(contacts,function(err){
	console.log('success');
});