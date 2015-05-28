//Callbacks notes

//Imagine if you want to place a free item into a person's cart
//after they have been shopping for a while. Imagine the cart
//has a function called 'addFreebie' which adds a candy bar
//to the cart if the user has been using the cart for more
//than 2 minutes. 

//Here is a cart with some items in it:

var cart = {
	items: [
		{name:'apple', category:'produce', price:0.97, qty:3},
		{name:'whole canned corn', category:'canned goods', price:0.79, qty:1},
		{name:'lettuce', category:'produce', price:0.79, qty:1},
		{name:'2% milk', category:'dairy', price:2.79, qty:1},
	],

	//Let's insert the function 'addFreebie'
	addFreebie: function(){
		//Add 'console.log' to see what's going on
		console.log('freebie added!');
		//Now add a free candy bar to the cart:
		this.items.push({name:'free candy bar', category:'candy', price:0, qty:1});
	},
};
//Now let's create a timer that will add the candy bar after 2 minutes (2 seconds for testing purposes)
setTimeout(cart.addFreebie, 2000);
//'cart.addFreebie' = Function that we want to invoke after 2 seconds
//'2000' = Miliseconds before function is invoked

//Running the exact code above will create an error:
//"Cannot call method 'push' of undefined"
//Pointing at 'this.items.push({...});'

//This indicates that 'items' is undefined. 'this' is not
//what we would expect it to be. We've written 'this' with
//the expectation that it would be a 'cart' object. We set
//'cart' up as an object in 'setTimeout' but we didn't invoke
//it. When 'setTimeout' invokes a function, it doesn't invoke
//it as a method of 'cart' because it doesn't know about 'cart'.
//All it knows is that it's being passed a function. Therefore,
//the binding to 'this' is lost and we get the error.

//We solve this problem by creating an anonymous function and
//wrap our method invocation inside it:

setTimeout(function(){
	cart.addFreebie();
},2000);
//We do invoke 'addFreebie' now which is indicated by the ()
//instead of simply passing it to 'setTimeout'. Node will know
//to invoke 'addFreebie' as a method since it's being invoked
//as a 'cart' object