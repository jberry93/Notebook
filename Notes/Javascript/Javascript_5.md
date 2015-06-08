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