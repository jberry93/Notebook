# Welcome!
The only assumption I am making here is that you can at least write FizzBuzz which should be pretty easy I hope.

##### If you don't know what FizzBuzz is, here you go: [FizzBuzz](http://lmgtfy.com/?q=fizzbuzz)

![Awkward Smile](images/awkwardSmile.gif)

Haha...uhh..yeah moving on

## Here are 3 ways to declare a variable:
- `var` - "Easy"
- `let` - "Huh? Never used that one"
- `const` - "WTF? This is JavaScript?"

### How does `var` do?
Well if you wrote any code in JavaScript, most likely you used `var` at least once. The main thing we have to worry about when using `var` is its *execution context*.

##### Two words: *execution context*
![Confused](images/confused.gif)

So what does this mean?

Think of an execution context as the environment or space a variable can be used in. The scope of a variable declared using `var` is dependent on the execution context. Scope is where we can access the variable. Here are a couple examples:

```JavaScript
var variable1 = "Here's a string";
function awesome() {
  var awesomeVar = "Awesome!!";
  return awesomeVar;
}
```

In the above example we can access `variable1` both in and out of `awesome()` since we declared `variable1` in the global scope. We can only access `awesomeVar` within `awesome()` since we declared `awesomeVar` inside of the scope of `awesome()`. We also have to take into consideration of when JavaScript is compiled. Hoisting occurs when JavaScript is compiled, or when we load JavaScript, any declarations (not initializations) are 'hoisted' to the top of the scope they are currently in. Let's look at some hoisting:

```JavaScript
var one; // Declared - Hoisted
var two = 2; // Initialized - Not hoisted
var three; // Declared - Hoisted
addSomething(); // Function call - Error (TypeError)
subtractSomething(); // Function call - Success
var addSomething = function() {}; // Initialized - Not hoisted
function subtractSomething () {}; // Declared - Hoisted
```

The reason why `addSomething()` will result in an error is because it was initialized instead of being declared. There is a fine line between declaring and initializing a variable. Here is the example after hoisting:

```JavaScript
var one;
var three;
function subtractSomething() {};
addSomething();
subtractSomething();
var two = 2;
var addSomething = function() {};
```
##### Hoisting is awesome!
![Awesome right?](images/awesome.gif)
