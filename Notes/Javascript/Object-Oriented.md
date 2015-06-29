### Scope
So what does this word **scope** mean? [Scope refers to the visibility of variables](http://www.cs.cf.ac.uk/Dave/PERL/node52.html). Scoping allows complete control over the use of variables. Global scope allows access to all variables even across different Javascript files

### Lexical Scope
A lexical scope (or static scope) defines the functionality of variables within the block of code it is defined in. The variables defined in this scope are called private variables ([reference](http://whatis.techtarget.com/definition/lexical-scoping-static-scoping)) 

Example:

```Javascript
function example(){


	/*The variables stored here are 
	considered private variables*/


};


/*Any variables declared outside of
the function enters the global scope*/


```