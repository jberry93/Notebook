# Even More Javascript Notes!

### Repeating a String
The purpose of this function is to input a string and a number which represents the number of times we want the function to repeat the given string. Here's the initial layout:

```Javascript
function repeat(str,num){
	//make algorithm
}
repeat('abc',3);
//Output: abcabcabc
```

We can use the `.repeat()` method to easily accomplish this task but we also want to confirm that the number that is passed through the function is positive since we cannot possibly return a negative amount of strings:

```Javascript
function repeat(str,num){
	if(num<1){
		return '';
	}else{
		return str.repeat(num);
	}
}
repeat('abc',3);
```

And we are done!