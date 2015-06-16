### Missing Letters
Make a function that will take in a string that is a range of letters. Check the string for a missing letter and return the letter missing from the range. If there is nothing missing, return `undefined`

Here's the initial function:

```Javascript
function fearNotLetter(str){
	/*letter detective*/
}
fearNotLetter('abce'); //'d'
fearNotLetter('bcd'); //undefined
fearNotLetter('abcdefghjklmno'); //'i'
fearNotLetter('yz'); //undefined
```

Our strategy for making this function will be to have 2 different for loops and an if statement after the for loops but first let's initialize 2 important variables:

```Javascript
function fearNotLetter(str){
	var sumunistr = 0;
	var sumunialpha = 0;
}
/*test cases*/
```

**First for loop** = This for loop will iterate through the given string `str`, add up all the unicode values given by the method `.charCodeAt()` and set that sum equal to a variable `sumunistr`:

```Javascript
function fearNotLetter(str){
	var sumunistr = 0;
	var sumunialpha = 0;
	
	//first for loop
	for(var j=0;j<str.length;j++){
		sumunistr += str.charCodeAt(j);
	}
}
/*test cases*/
```

**Second for loop** = This for loop will iterate through all the unicode values of the letters between the first letter (Given by: `str.charCodeAt(0)`) and the last letter (By limiting `i` by: `str.charCodeAt(str.length-1)`) given in `str`, add up all the unicode values given by the same method as above and set that sum equal to a variable `sumunialpha`:

```Javascript
function fearNotLetter(str){
	var sumunistr = 0;
	var sumunialpha = 0;
	
	//first for loop
	for(var j=0;j<str.length;j++){
		sumunistr += str.charCodeAt(j);
	}

	//second for loop
	for(var i=str.charCodeAt(0);i<=str.charCodeAt(str.length-1);;i++){
		sumunialpha += i;
	}
}
/*test cases*/
```

**if statement** = This if statement will check to see if the unicode sums equal each other. If they do not equal, subtract the two unicode sums and use the method `String.fromCharCode()` to return the letter that is missing from the given letter range. We use `String.fromCharCode()` and not just `.fromCharCode()` since `.fromCharCode()` is a static method of `String`. According to [Wikipedia](https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods) a static method is meant to be relevant to all instances of a class, not just a specific instance. If they do equal, return `undefined`:

```Javascript
function fearNotLetter(str){
	var sumunistr = 0;
	var sumunialpha = 0;
	
	//first for loop
	for(var j=0;j<str.length;j++){
		sumunistr += str.charCodeAt(j);
	}

	//second for loop
	for(var i=str.charCodeAt(0);i<=str.charCodeAt(str.length-1);i++){
		sumunialpha += i;
	}

	//if statement
	if(sumunistr !== sumunialpha){
		return String.fromCharCode(sumunialpha - sumunistr);
	}else{
		return undefined;
	}
}
fearNotLetter('abce'); //'d'
fearNotLetter('bcd'); //undefined
fearNotLetter('abcdefghjklmno'); //'i'
fearNotLetter('yz'); //undefined
```

We have completed the function!

### Booleans
Very simple function this time around! Check if a given value is classified as a boolean primitive (Meaning, is it `true` or `false`?)

Here's the initial function:

```Javascript
function boo(bool){
	/*true or false?*/
}
boo(null);
boo(1);
boo(false);
boo([].slice);
boo({'a':1});
```

We can make this function with just 1 if statement which will check to see if the given `bool` value is `true` or `false`. If it is, return `true`. If it is not, return `false`: