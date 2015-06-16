### Missing Letters
Make a function that will take in a string that is a range of letters. Check the string for any missing letters and return the letters missing from the range. If there are no letters missing, return `undefined`

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

**Second for loop** = This for loop will iterate through all the unicode values of the letters between the first letter (Given by: `str.charCodeAt(0)`) and the last letter (By limiting `i` by: `str.charCodeAt(str.length-1)`) given in `str`, add up all the unicode values given by the same method as above and set that sum equal to a variable `sumunialpha`

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

**if statement** = This if statement will check to see if the unicode sums equal each other. If they do not equal, subtract the two unicode sums and use the method `String.fromCharCode()` to return the letter that is missing from the given letter range. If they do equal, return `undefined`

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
/*test cases*/
```