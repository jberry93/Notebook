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

### Index?
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