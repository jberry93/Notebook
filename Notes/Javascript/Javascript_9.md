### Smallest Common Multiple
This function will take in an array containing 2 numbers which indicates a range. The job of this function is to find the least common multiple (LCM) that is evenly divisibly by every number in this range

Here's the initial function:

```Javascript
function smallestCommons(arr){
	/*Least Common Multiple*/
}
smallestCommons([1,5]); //60
smallestCommons([5,1]); //60
smallestCommons([1,13]); //360360
```

We will be using more Greek mathematics in this case but before that we need to set up the function so that we can feed the algorithm ('Greek mathematics' part) an array of all the numbers in the range so let's first make that array:

```Javascript
function smallestCommons(arr){
	var rangeArr = [];
	for(var j=Math.min(arr[0],arr[1]);j<=Math.max(arr[0],arr[1]);j++){
		rangeArr.push(j);
	}
}
/*test cases*/
```

So what this for loop will do is start from the smallest number of the 2 elements in the `arr` array and iterate up to and including the largest of the 2 elements in `arr` and push each number into the empty array `rangeArr`. This way, we have an array of all the numbers in our range!

Let's make another for loop that will iterate through each element of `rangeArr`, not including the first element which we will set equal to variable `a`. The purpose of this will be clearer later on:

```Javascript
function smallestCommons(arr){
	var rangeArr = [];
	for(var j=Math.min(arr[0],arr[1]);j<=Math.max(arr[0],arr[1]);j++){
		rangeArr.push(j);
	}
	var a = rangeArr[0];
	for(var i=1;i < rangeArr.length;i++){
		/*Euclidean Algorithm*/
	}
}
/*test cases*/
```

And here is where Greek mathematician [Euclid](https://en.wikipedia.org/wiki/Euclid) comes into play! His [algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) is a very efficient way to calculate the greatest common divisor (GCD). The [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm) is the largest possible number that divides evenly into 2 given numbers

To find the GCD of 18 and 48 using Euclid's algorithm, take the larger of the 2 numbers and divide by the smallest. So `48 / 18` will yield a quotient of 2 and a remainder of 12 (Note: `48 % 18` equals 12). Now take the smallest number and divide by the remainder: `18 / 12` to get a quotient of 1 and remainder of 6. Now take the previous remainder 12 and divide by the present remainder 6 to get a quotient of 2 and a remainder of 0. Now that our remainder is 0 we can conclude that the GCD of 18 and 48 is 6!

This example provides us with pseudocode which we will now implement in our existing code using a while loop within our for loop. Our while loop is going work for as long as the given condition is true. This means whatever we pass as the condition must exist to evaluate true and since `0` is considered `false` to the while loop, the while loop will stop. We will use this to our advantage when solving for the GCD (Keep in mind that this function will solve for the LCM and return it!)

Let's first initialize some variables before filling in the contents of our while loop:

```Javascript
function smallestCommons(arr){
	var rangeArr = [];
	for(var j=Math.min(arr[0],arr[1]);j<=Math.max(arr[0],arr[1]);j++){
		rangeArr.push(j);
	}
	var a = rangeArr[0];
	for(var i=1;i < rangeArr.length;i++){
		var b = rangeArr[i];
		var c = a;
		while(a && b){
			/*Euclidean algorithm pseudocode*/
		}
	}
}
/*test cases*/
```

Reason why we set variable `c` equal to `a` is that the value of `a` is going to possibly change with what we will use inside of the while loop. We are going to use modulo to grab the remainder of the larger number divided by the smaller number and set it equal to `a` or `b` depending on which is larger. Plus we need `c` to equal `a` since we are going to use the first element of `rangeArr` along with the GCD to help us solve for the LCM. Let's fill in the contents of our while loop:

```Javascript
function smallestCommons(arr){
	var rangeArr = [];
	for(var j=Math.min(arr[0],arr[1]);j<=Math.max(arr[0],arr[1]);j++){
		rangeArr.push(j);
	}
	var a = rangeArr[0];
	for(var i=1;i < rangeArr.length;i++){
		var b = rangeArr[i];
		var c = a;
		while(a && b){
			if(a > b){
				a %= b;
			}else{
				b %= a;
			}
		}
	}
}
/*test cases*/
```

Okay! Now that we have our GCD, let's now solve for the LCM. We are going to take all the elements of `rangeArr` and multiply each one together. From here, we will divide by the sum of `a` and `b` (which is our GCD) to get our LCM!

```Javascript
function smallestCommons(arr){
	var rangeArr = [];
	for(var j=Math.min(arr[0],arr[1]);j<=Math.max(arr[0],arr[1]);j++){
		rangeArr.push(j);
	}
	var a = rangeArr[0];
	for(var i=1;i < rangeArr.length;i++){
		var b = rangeArr[i];
		var c = a;
		while(a && b){
			if(a > b){
				a %= b;
			}else{
				b %= a;
			}
		}
		a = (c * rangeArr[i]) / (a + b)
	}
}
/*test cases*/
```

All that's left is to return `a` but here's a quick note on the contents of our while loop: We could technically use a [ternary operation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) which utilizes `?` and `:` to get the same result as the if/else statement like so:

```Javascript
if(a > b){
	a %= b;
}else{
	b %= a;
}

//Ternary equivalent:

a > b ? a %= b : b %= a;

condition ? valueIfTrue : valueIfFalse;
```

Let's replace the if/else statement with the ternary equivalent to make our code a little easier on the eye and return `a` to complete our function:

```Javascript
function smallestCommons(arr){
	var rangeArr = [];
	for(var j=Math.min(arr[0],arr[1]);j<=Math.max(arr[0],arr[1]);j++){
		rangeArr.push(j);
	}
	var a = rangeArr[0];
	for(var i=1;i < rangeArr.length;i++){
		var b = rangeArr[i];
		var c = a;
		while(a && b){
			a > b ? a %= b : b %= a;
		}
		a = (c * rangeArr[i]) / (a + b)
	}
	return a;
}
smallestCommons([1,5]); //60
smallestCommons([5,1]); //60
smallestCommons([1,13]); //360360
```

### Function As An Argument
Make a function that takes in an array as its first argument and a function as its second argument. This second argument will be our 'truth test' which will check to see if any of the elements are divisible by 2. If it is, return the first element that is divisible by 2