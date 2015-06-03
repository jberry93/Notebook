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
//Output: A-tisket...
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
```

`.slice()` = The first number is where we begin to truncate or slice while the second number is where we end the slice. Everything between these two numbers will be extracted. We subtract 3 from `num` since the length of '...' is 3