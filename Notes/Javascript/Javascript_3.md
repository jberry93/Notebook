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

We can use the `.repeat()` method to easily accomplish this task but we also want to confirm that the number that is passed through the function is positive and not zero since we cannot possibly return a negative amount of strings and we want to return at least 1 string:

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

### Truncation
Click [here](http://dictionary.reference.com/browse/truncate) for a definition on 'truncate' (You should have an idea of what it is based on the name of the method involved)

Take in 2 arguments where the first argument is a string that will be truncated while the second argument is the maximum string length that we are restraining the first argument by. We must return the truncated string with '...' at the end which will also count towards the end of the string length. Here's the initial setup:

```Javascript
function truncate(str,num){
	//make an algorithm
}
truncate('A-tisket a-tisket A green and yellow basket',11);
```

We need to first verify that the length of the string is indeed larger than the maximum string value using an if statement. If it is then we will truncate via `.slice()` taking care to include '...' into our index count:

```Javascript
function truncate(str,num){
	if(str.length > num){
		return str.slice(0,num-3) + '...';
	}else{
	return str;
	}
}
truncate('A-tisket a-tisket A green and yellow basket',11);
//Output: A-tisket...
```

`.slice()` = The first number is where we begin to truncate or slice while the second number is where we end the slice. Everything between these two numbers will be extracted. We subtract 3 from `num` since the length of '...' is 3

### Array-ception
Create a function containing 2 arguments where 1 argument is an array and the second argument is a numerical value that represents the maximum size of sub-arrays. The point of this exercise is to break an array into sub-arrays while also controlling the size of the sub-arrays. For example:

```Javascript
var bigArray = ["cat","dog","penguin","pig","pug","jim"];
var subArray = [];
var limit = 3;
//Algorithm goes here
return subArray;
//Output: [["cat","dog","penguin"],["pig","pug","jim"]]
```

Here is our basic format for the function:

```Javascript
function chunk(arr,size){
	//make algorithm
}
chunk(['0','1','2','3','4','5'],2);
```

We need to use a for loop to iterate through the array so that we can `.push()` and `.splice()` it into a new array `newarr`containing sub-arrays:

```Javascript
function chunk(arr,size){
	var newarr = [];
	for(var i=0;i<=arr.length;i++){
		newarr.push(arr.splice(0,size));
	}
	return newarr;
}
chunk(['0','1','2','3','4','5'],2);
//Output: [['0','1'],['2','3'],['4','5']]
```

**for loop explanation** = We need to make sure we iterate through every element of `arr` so we must be inclusive when limiting the value of `i` in our for loop to the length of `arr`. If we fail to be inclusive, we will not produce sub-arrays containing every element of the initial array `arr`

**.push() explanation** = Since we are making sub-arrays, we use `.splice()` and NOT `.slice()` since:

`.splice()` = A method that changes the content of an array by removing existing elements and/or adding new elements

`.slice()` = A method that returns a copy of a portion of an array into a new array object.

`.slice()` returns a copy while `.splice()` has the ability to make changes which is what we want. We are changing the initial array and returning it in the form of multiple sub-arrays within an array. Here is what will happen if we replace `.splice()` with `.slice()` in our current function we get:

```Javascript
function chunk(arr,size){
	var newarr = [];
	for(var i=0;i<=arr.length;i++){
		newarr.push(arr.slice(0,size));
	}
	return newarr;
}
chunk(['0','1','2','3','4','5'],2);
//Output: [['0','1'],['0','1'],['0','1'],...]
```