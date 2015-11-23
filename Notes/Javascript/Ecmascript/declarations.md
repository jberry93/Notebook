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

In the above example we can access `variable1` both in and out of `awesome()` since we initialized `variable1` in the global scope. We can only access `awesomeVar` within `awesome()` since we initialized `awesomeVar` inside of the scope of `awesome()`. We also have to take into consideration of when JavaScript is compiled. Hoisting occurs when JavaScript is compiled, or when we load JavaScript, so all declarations (not initializations) are 'hoisted' to the top of the scope they are currently in. Let's look at some hoisting:

```JavaScript
var one; // Declared - Hoisted
var two = 2; // Initialized - Not hoisted
var three; // Declared - Hoisted
addSomething(); // Function call - Error (TypeError)
subtractSomething(); // Function call - Success
var addSomething = function() {}; // Initialized - Not hoisted
function subtractSomething () {}; // Declared - Hoisted
```

The reason why `addSomething()` will result in an error is because it was considered to be a variable being initialized as a function instead of being declared a function like `subtractSomething()`. There is a fine line between declaring and initializing a variable. Here is the example after hoisting:

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

### How does `let` do?
Just like `var` we are declaring a variable except this time the scope is more limited when we use `let`. When we declare a variable using `let`, the variable is only strictly available within the scope it was declared in.

For example:

```JavaScript
var varOne = 1;
var varTwo = 2;
if(varOne === 1) {
  let varOne = 3;
  var varTwo = 4;
  console.log(varOne); // 3
  console.log(vartwo); // 4
}
console.log(varOne); // 1
console.log(varTwo); // 4
```

(Took this example from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) since it was pretty good :+1:)

##### Get it?
![Jack is confused](images/jackConfused.gif)

No? Well let me explain by going line-by-line:

The first two lines of the code block consist of initializing two variables: `varOne` will equal `1` and `varTwo` will equal `2`. The if statement will check to see if `varOne` strictly equals a numeral value of 1. If so, run the code between the two curly braces. Next we `let` `varOne` equal `3`, meaning only within the scope of this if statement (Only when `varOne` is strictly equal to `1`) will `varOne` equal `3`. Below that we are initializing `var` `varTwo` equal to `4`, meaning that from now on regardless of scope, `varTwo` will now equal `4` because we used `var` instead of `let`.

Please note that hoisting does occur with `let`! If we reference the variable before it is declared, we will get a reference error which tells us that that variable does not exist at this point in time.

##### Got it? Good!
![thumbs up](images/thumbsUp.gif)

### How does `const` do?
When using `const` think of it like you are writing something in stone. Here are three rules to abide by when using `const`:
- `const` requires an initializer
- The variable name used for `const` cannot be reused with another `const`, `let`, or `var`
- Once initialized, the value of `const` will not and cannot be changed
- Best practice to uppercase the entire variable name

For example:

```JavaScript
const CONSTANT = "Here's a constant"; // Good!
const CONSTANT = "Here's another constant"; // Error!!
var CONSTANT = 21; // Error!!
const ANOTHER_CONSTANT; // Error!!
const OBJECT = {"key": "value"}; // Good!
```

Awesome! That's everything I learned for declarations in Ecmascript 6! Hopefully you learned something too! Continue on and read about arrow functions.

##### :+1:
![Good luck!!](images/goodluck.gif)

---

[Next]() (Arrow functions)

[Previous](https://github.com/jberry93/Notebook/blob/master/Notes/Javascript/Ecmascript/startHere.md) (Introduction)
