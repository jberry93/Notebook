# Keep Chugging!

### Removing Elements
Make a function that will take in an array followed by 1 or more arguments and remove all elements in the array that have the same value as the 1 or more arguments

Initial function:

```Javascript
function destroyer(arr){
	return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//Output: [1, 1]

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
//Output: [1, 5, 1]
```

In order to complete this function, we need to utilize the `.filter()` method again which will read in a `callback` function, implement the test that `callback` function contains, and spit out an array full of elements that pass the `callback` test. In this case, the `callback` function is what will make the `destroyer` function work. Here's the `callback` function together with the `destroyer` function:

```Javascript
function callback(/*argument*/){
	/*something useful*/
}
function destroyer(arr){
	return arr.filter(callback);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//Output: [1, 1]

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
//Output: [1, 5, 1]
```

Refer to Javascript_4; section [Falsey](https://github.com/jberry93/Notebook/blob/master/Notes/Javascript/Javascript_4.md) for another use case of the method `.filter()`

Now that we have our basic format for our 2 functions we need to make sure that when we pass arguments into `destroyer` that our first argument is indeed an array so to do that, we need to use an if statement to check and make sure that is true. Also we need to be able to call the first parameter of the function `arr` since this is where our array will be located. To do this we utilize the `arguments` object:

```Javascript
function callback(/*argument*/){
	/*something useful*/
}
function destroyer(arr){
	if(typeof arguments[0] !== 'object'){
		return [];
	}else{
		return arr.filter(callback);
	}
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//Output: [1, 1]

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
//Output: [1, 5, 1]
```

This `arguments` object is really useful when it comes to referring to a function's arguments within the function itself. For example:

```Javascript
function idMe(firstName,favDog,age){
	console.log(arguments[0]); //Output: 'Jeff'
	console.log(arguments[1]); //Output: 'Pug'
	console.log(arguments[2]); //Output: 22
}
idMe('Jeff','Pug',22);
```

Okay now comes the important part: the `callback` function. Since we are trying to remove the numbers 2 and 3 from our arrays, we need to make sure that the `element`s in our array do not equal 2 or 3. If the `element` does not equal 2 or 3 then we will return the element which will be pushed into an array via the `.filter()` method:

```Javascript
function callback(element){
	if(element !== 2 && element !== 3){
		return element;
	}
}
function destroyer(arr){
	if(typeof arguments[0] !== 'object'){
		return [];
	}else{
		return arr.filter(callback);
	}
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//Output: [1, 1]

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
//Output: [1, 5, 1]
```

Our `destroyer` function coupled with the `callback` function is complete!

### Array-Index Trouble
Make a function that will insert a number `num` into an array `arr` and return the lowest possible index where it would be sorted into

Here's the initial function:

```Javascript
function where(arr,num){
	/*magic*/
}
where([10, 20, 30, 40, 50], 35);
//Output: 3

where([10, 20, 30, 40, 50], 30);
//Output: 2
```

We need to utilize 3 different methods to accomplish this function: `.concat()`, `.sort()`, and `.indexOf()`:

`.concat()` = A method that will return an array made up of the original array plus whatever extra arrays and/or elements placed within `()`

`.sort()` = A method that will sort elements based on string unicode code points and return an array of the elements sorted thereafter

`.indexOf()` = A method that will return the first index a given element is found. Refer to Javascript_4; section [Mutations](https://github.com/jberry93/Notebook/blob/master/Notes/Javascript/Javascript_4.md) for another use case of this method

Now all we need to do is first add `num` to `arr`, sort the array with the added `num` inside of it, and finally find the index of `num` in the newly sorted array. This can all be accomplished in one line of code:

```Javascript
function where(arr,num){
	return arr.concat(num).sort().indexOf(num);
}
where([10, 20, 30, 40, 50], 35);
//Output: 3

where([10, 20, 30, 40, 50], 30);
//Output: 2
```

### Adding Numbers
In this function, we will pass in an array containing 2 elements that are numbers. The point of this function is to add up those 2 numbers along with all the other numbers between those 2 numbers together and return the value

Here's the initial function:

```Javascript
function sumAll(arr){
	/*magic*/
}
sumAll([1, 4]); //Output: 10
sumAll([4, 1]); //Output: 10
sumAll([5, 10]); //Output: 45
sumAll([10, 5]); //Output: 45
```

First thing we need to do is create a variable called `sum` which will at first equal 0. We want to eventually input the sum of all numbers between the 2 elements in the array into the `sum` variable so that we can return it:

```Javascript
function sumAll(arr){
	var sum = 0;
	/*more magic*/
	return sum;
}
sumAll([1, 4]); //Output: 10
sumAll([4, 1]); //Output: 10
sumAll([5, 10]); //Output: 45
sumAll([10, 5]); //Output: 45
```

Now we need to utilize a for loop and iterate through all the numbers between the smallest number and the largest number and add up all the numbers with a `+=`. We will also be using `Math.min()` to call our smallest number and `Math.max()` to call our largest number

We need to initialize our for loop variable to equal the smallest possible number in our array. We will then set the limit less than or equal to the largest possible number in our array and the iterate by one through the numbers:

```Javascript
function sumAll(arr){
	var sum = 0;
		for(var i=Math.min(arr[0],arr[1]);i<=Math.max(arr[0],arr[1]);i++){
			sum += i;
	}
	return sum;
}
sumAll([1, 4]); //Output: 10
sumAll([4, 1]); //Output: 10
sumAll([5, 10]); //Output: 45
sumAll([10, 5]); //Output: 45
```

And we have now completed the function!

### Comparing Arrays
Let's make a function that will compare the elements of 2 different arrays and return a new array containing elements that are not found in either of the 2 original arrays

Here's our initial function and test cases for the function:

```Javascript
function diff(arr1,arr2){
	/*magic~*/
}
diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
//Output: ['pink wool']

diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
//Output: ['diorite', 'pink wool']

diff(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']);
//Output: []

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//Output: [4]

diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]);
//Output: ['piglet', 4]

diff([], ['snuffleupagus', 'cookie monster', 'elmo']);
//Output: ['snuffleupagus', 'cookie monster', 'elmo']
```

Our strategy for solving this function will be to use a combination of a for loop with an if statement within the loop. This way, we can iterate through each element of both arrays and check to see if there are any differences between the elements in `arr1` and `arr2`. We are going to need 2 of these for/if combinations, one for each array argument of function `diff`:

```Javascript
function diff(arr1,arr2){
	var newArr = [];
	for(var i=0;i < arr1.length; i++){
		if(/*constraint*/){
			/*do something magical*/
		}
	}
	for(var j=0;j < arr2.length; j++){
		if(/*constraint*/){
			/*do something magical*/
		}
	}
}
/*Test cases here*/
```

In the first if statement, we will utilize the `.indexOf()` method to see if there are any `arr1` elements that are not present in `arr2`. `.indexOf()` is useful in that if the given element from `arr1` is not also part of `arr2`, `.indexOf()` will return a value of `-1`, therefore we will use it accordingly:

```Javascript
function diff(arr1,arr2){
	var newArr = [];
	for(var i=0;i < arr1.length; i++){
		if(arr2.indexOf(arr1[i]) == -1){
			/*do something magical*/
		}
	}
	for(var j=0;j < arr2.length; j++){
		if(/*constraint*/){
			/*do something magical*/
		}
	}
}
/*Test cases here*/
```

A similar constraint is given to the second if statement but in this case, we are checking `arr2` elements with `arr1` array:

```Javascript
function diff(arr1,arr2){
	var newArr = [];
	for(var i=0;i < arr1.length; i++){
		if(arr2.indexOf(arr1[i]) == -1){
			/*do something magical*/
		}
	}
	for(var j=0;j < arr2.length; j++){
		if(arr1.indexOf(arr2[j]) == -1){
			/*do something magical*/
		}
	}
}
/*Test cases here*/
```

So now that we have singled out the differences between both arrays, we need to `.push()` those different elements into `newArr` and return `newArr` like so:

```Javascript
function diff(arr1,arr2){
	var newArr = [];
	for(var i=0;i < arr1.length; i++){
		if(arr2.indexOf(arr1[i]) == -1){
			newArr.push(arr1[i]);
		}
	}
	for(var j=0;j < arr2.length; j++){
		if(arr1.indexOf(arr2[j]) == -1){
			newArr.push(arr2[j]);
		}
	}
	return newArr;
}
/*Test cases here*/
```

We have completed the function!