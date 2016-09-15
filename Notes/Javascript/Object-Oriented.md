### Scope
So what does this word **scope** mean? [Scope refers to the visibility of variables](http://www.cs.cf.ac.uk/Dave/PERL/node52.html). Scoping allows complete control over the use of variables. Global scope allows access to all variables even across different JavaScript files

### Lexical Scope
A lexical scope (or static scope) defines the functionality of variables within the block of code it is defined in. The variables defined in this scope are called private variables ([reference](http://whatis.techtarget.com/definition/lexical-scoping-static-scoping))

Example of lexical and global scope:

```JavaScript
var pugs = pugSnort();
var meh = function() {
	var dogs = dogBark();

	/*The variables stored here are
	considered private variables*/


};


/*Any variables declared outside of
the function enters the global scope*/


```

Question: Which of these variables would be available from within the body of the `meh` function?

Answer: All 3 declared variables are accessible within the `meh` function

Take note that curly braces from a function statement will create a new scope. Curly braces from a for loop or if statement do not create a new scope!

### Execution Contexts
An execution context is like the environment in which a function is executed in and works in-memory. It begins with the global execution context and stacks up as we introduce more functions

Example:

```JavaScript
//global execution context out here

function dream(){
	//another execution context

	function dominickCobb(){
		//another execution context

		function inception(){
			//another execution context
		}
	}

	function malCobb(){
		//another execution context

		function mindF(){
			//another execution context
		}
	}
}
```

The main difference between lexical scopes and execution contexts is that lexical scopes are built as the code runs

###Prototype Chains
Prototype chains allow you to make objects that behave as if they have the same properties as other objects by depending on failed lookups

Let's first make an object:

```JavaScript
var animal = {dog:'pug'};
console.log(animal.dog);
```

The JavaScript interpreter is going to first see if object `animal` has the `dog` property. Once it sees that `'pug'` is paired with the `dog` property, it will log `'pug'` into the console. If we tried to execute `console.log(animal.cat)`, we would get `undefined` since the object `animal` does not have property `cat`

Now if we wanted to create a new object that will execute an ongoing lookup of another object given that a property does not exist in the new object, we must utilize `Object.create()` like so:

```JavaScript
var animal = {dog:'pug'};
console.log(animal.dog); //pug

var wildAnimal = Object.create(animal);
console.log(wildAnimal.dog); // ???
```

Since the object `wildAnimal` does not contain property `dog` (failed lookup), it will go up the chain and check object `animal` to see if it might have property `dog`. Since object `animal` does have property `dog`, `wildAnimal.dog` will log `'pug'` into the console:

```JavaScript
var animal = {dog:'pug'};
console.log(animal.dog); //pug

var wildAnimal = Object.create(animal);
console.log(wildAnimal.dog); //pug
```

There is a top-level object that every JavaScript object delegates to when looking up properties and this top-level object is called `Object.prototype`. It provides the shared properties of all objects within the system

Prototype chains are extremely useful when it comes to sharing code and being efficient with memory usage

###Code Reuse
Code reuse allows you to write generalized code which can address similar functionality. It reduces redundancy
