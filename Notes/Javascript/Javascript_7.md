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

```Javascript
function boo(bool){
	if(bool === true || bool === false){
		return true;
	}else{
		return false;
	}
}
boo(null);
boo(1);
boo(false);
boo([].slice);
boo({'a':1});
```

As simple as that!

### Très Arrays
Make a function that will take in 3 arrays and return an array containing all unique values in the order of the original provided arrays

Here's an example:

```Javascript
function unite(arr1,arr2,arr3){
	/*très array magic*/
}
unite([1, 2, 3], [5, 2, 1, 4], [2, 1]); //[1,2,3,5,4]
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]); //[1,3,2,5,4]
unite([1, 3, 2], [1, [5]], [2, [4]]); //[1,3,2,[5],[4]]
```

The strategy for this function will be a collection of 3 for loops where 2 of these for loops will have an if statement within. Let's first initialize a variable that we will be using throughout the 3 for loops and get the general structure of our function down:

```Javascript
function unite(arr1,arr2,arr3){
	var alpha = [];
	for(/*first for loop*/){
		/*certain method here*/
	}
	for(/*second for loop*/){
		if(/*first constraint*/){
			/*same method here*/
		}
	}
	for(/*third for loop*/){
		if(/*second constraint*/){
			/*same method here*/
		}
	}
	return alpha;
}
/*test cases*/
```