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

In order to complete this function, we need to utilize the method `.filter()` again which will read in a `callback` function, implement the test that `callback` contains, and spit out an array full of elements that pass the `callback` test. In this case, the `callback` function is what will make the `destroyer` function. Here's the `callback` function together with the `destroyer` function:

```Javascript
function callback(/*argument*/){
	/*something useful*/
}
function destroyer(arr){
	arr.filter(callback);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//Output: [1, 1]

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
//Output: [1, 5, 1]
```

Refer to Javascript_4; section [Falsey](https://github.com/jberry93/Notebook/blob/master/Notes/Javascript/Javascript_4.md) for another use case of the method `.filter()`