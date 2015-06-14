# Lots to Learn!

### Roman Numerals
With this function, we want to convert a given number into its corresponding roman numeral

Here's the initial function:

```Javascript
function convert(num){
	/*Roman warfare*/
}
convert(36); //'XXXVI'
convert(12); //'XII'
convert(5); //'V'
convert(9); //'IX'
convert(29); //'XXIX'
convert(16); //'XVI'
```

To do this, we need to first make 2 arrays. One array will contain the string values of the roman numerals. We only need to include the roman numerals that could be reused multiple times like: 1, 4, 5, 9, and 10 whose corresponding roman numerals are; I, IV, V, IX, and X respectfully

So why would we not use 2, 3, 6, 7, and 8? Well those roman numerals can be made using the given roman numerals above and we want to reduce redundancy as much as possible. Given that the roman numeral for 2 is just two '1' roman numerals, there is no need to include it in our roman numeral value array:

```Javascript
function convert(num){
	var romanVal = ['I','IV','V','IX','X'];
	var decimalVal = [1,4,5,9,10];
	/*Roman sorcery*/
}
/*Test cases*/
```

Now we need to stick our roman numerals into a variable so that we can return the value so let's also make another variable whose value is an empty string:

```Javascript
function convert(num){
	var romanVal = ['I','IV','V','IX','X'];
	var decimalVal = [1,4,5,9,10];
	var romanNum = '';
	/*Roman sorcery*/
}
/*Test cases*/
```

We need to combine a for loop with a while loop to make our function work efficiently. We will first iterate through the length of `romanVal`:

```Javascript
function convert(num){
	var romanVal = ['I','IV','V','IX','X'];
	var decimalVal = [1,4,5,9,10];
	var romanNum = '';
	for(var i=0;i < romanVal.length; i++){
		/*Roman sorcery*/
	}
}
/*Test cases*/
```

Next is the while loop component. For as long as `num` is larger than the elements within `decimalVal`, our while loop will subtract the elements of `decimalVal` from `num` and set it back equal to `num` until `num` equals zero. At the same time, the elements from `romanVal` will be added to `romanNum` for as long as the while loop condition stands true:

```Javascript
function convert(num){
	var romanVal = ['I','IV','V','IX','X'];
	var decimalVal = [1,4,5,9,10];
	var romanNum = '';
	for(var i=0;i < romanVal.length; i++){
		while(num>=decimalVal[i]){
			num-=decimalVal[i];
			romanNum+=romanVal[i];
		}
	}
	return romanNum;
}
convert(36); //'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII'
convert(12); //'IIIIIIIIIIII'
convert(5); //'IIIII'
convert(9); //'IIIIIIIII'
convert(29); //'IIIIIIIIIIIIIIIIIIIIIIIIIIIII'
convert(16); //'IIIIIIIIIIIIIIII'
```

Oh no! We have a major problem with our code! Notice how the inside of the while loop is set up. Since we are iterating through the elements of `decimalVal` one at a time from left to right and subtracting that element from the value of `num`, we are only subtracting with the first element of `decimalVal` which is `1`. We need to flip the order of both arrays to get the correct roman numeral values:

```Javascript
function convert(num){
	var romanVal = ['X','IX','V','IV','I'];
	var decimalVal = [10,9,5,4,1];
	var romanNum = '';
	for(var i=0;i < romanVal.length; i++){
		while(num>=decimalVal[i]){
			num-=decimalVal[i];
			romanNum+=romanVal[i];
		}
	}
	return romanNum;
}
convert(36); //'XXXVI'
convert(12); //'XII'
convert(5); //'V'
convert(9); //'IX'
convert(29); //'XXIX'
convert(16); //'XVI'
```

Awesome! Now that we flipped the arrays, we begin subtracting with the largest possible `decimalVal` and continue on down the line of elements until `num` is zero

### Replacing Strings
Make a function that will take in a total of 3 arguments:

`str` = The initial string we are manipulating

`before` = The word that we are replacing

`after` = The word that we are replacing `before` with

Here is the initial function with test cases:

```Javascript
function replace(str,before,after){
	/*sorcery*/
}
replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
replace("Let us go to the store", "store", "mall");
replace("He is Sleeping on the couch", "Sleeping", "sitting");
replace("This has a spellngi error", "spellngi", "spelling");
replace("His name is Tom", "Tom", "john");
```

First order of business is to separate the `before` and `after` strings into 2 separate arrays containing their individual characters. We do this by using the `.split()` method and since we are splitting the strings into individual letters, we will use an empty string as an indicator. We need to make sure that if the first letter of `before` is capitalized, the first letter of `after` is also capitalized:

```Javascript
function replace(str,before,after){
	var beforearr = before.split('');
	var afterarr = after.split('');
}
/*test cases*/
```

Next we can include an if statement that checks the first letter (or in this case, the first element of the `beforearr` array) of the `before` string to see if it is capitalized. If it is then we will capitalize the first letter (or the first element in the `afterarr` array) of the `after` string and `.join()` all the characters back into a string:

```Javascript
function replace(str,before,after){
	var beforearr = before.split('');
	var afterarr = after.split('');
	if(beforearr[0].toUpperCase() == beforearr[0]){
		afterarr[0] = afterarr[0].toUpperCase();
		after = afterarr.join('');
	}
}
/*test cases*/
```

All that is left is to use the `.replace()` method to replace the `before` string with `after` in `str`:

```Javascript
function replace(str,before,after){
	var beforearr = before.split('');
	var afterarr = after.split('');
	if(beforearr[0].toUpperCase() == beforearr[0]){
		afterarr[0] = afterarr[0].toUpperCase();
		after = afterarr.join('');
	}
	return str.replace(before,after);
}
replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
replace("Let us go to the store", "store", "mall");
replace("He is Sleeping on the couch", "Sleeping", "sitting");
replace("This has a spellngi error", "spellngi", "spelling");
replace("His name is Tom", "Tom", "john");
```

This function has been successfully completed! Run it with the test cases above to see for yourself!

###Pig Latin
Make a function that will convert a given string into its Pig Latin equivalent. For example:

```Javascript
function translate(str){
	/*pig magic*/
}
translate('consonant'); //'onsonantcay'
translate('california'); //'aliforniacay'
translate('paragraphs'); //'aragraphspay'
translate('glove'); //'oveglay'
translate('algorithm'); //'alogorithmway'
translate('eight'); //'eightway'
```

Here is the Wikipedia entry for [Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin) to get a better understanding

Pig Latin relies heavily on the presence and/or absence of vowels which can include 'a', 'e', 'i', 'o', or 'u'. Let's first make a separate function called `vowelCheck` outside of `translate` that takes in an array of letters comprised of the given string using `.split()`:

```Javascript
function translate(str){
	var strarr = str.split('');
	/*pig magic*/
}
function vowelCheck(strarr){
	/*vowel magic*/
}
/*test cases*/
```

In `vowelCheck` we need to see if the the given array has any element containing a vowel which could be 'a', 'e', 'i', 'o', or 'u'. If it is 'a', 'e', 'i', 'o', or 'u', we will have the function return `true`. Else, the function will return `false`:

```Javascript
function translate(str){
	var strarr = str.split('');
	/*pig magic*/
}
function vowelCheck(strarr){
	if(strarr == 'a' || strarr == 'e' || strarr == 'i' || strarr == 'o' || strarr == 'u'){
    	return true;
  	}else{
    	return false;
  	}
}
/*test cases*/
```

Now that we have completed the `vowelCheck` function, we now need to make our conditions for the `translate` function. In this case, we will have 3 different conditions which means we will have an if/else-if/else structure:

**Condition 1** = Check to see if the first element in `strarr` is a vowel. If it is, return the original string `str` concatenated with 'way'

**Condition 2** = Check to see if the 2nd element of the string is a consonant (which would make our `vowelCheck` function return `false`). If it is, take the first 2 letters and place them on the end of the string and add 'ay' to the very end of that same string

**Condition 3** = Check to see if the 1st element of the string is a consonant. If it is, take the first element and place it on the end of the string and add 'ay' to the very end of that same string

```Javascript
function translate(str){
	var strarr = str.split('');
	/*Condition 1*/if(vowelCheck(strarr[0])){
    	return str + 'way';
  	}/*Condition 2*/else if(vowelCheck(strarr[1]) === false){
    	strarr[strarr.length] = strarr[0] + strarr[1] + 'ay';
    	return strarr.splice(2,strarr.length).join('');
  	}/*Condition 3*/else{
    	strarr[strarr.length] = strarr[0] + 'ay';
    	return strarr.splice(1,strarr.length).join('');
  	}
}
function vowelCheck(strarr){
	if(strarr == 'a' || strarr == 'e' || strarr == 'i' || strarr == 'o' || strarr == 'u'){
    	return true;
  	}else{
    	return false;
  	}
}
/*test cases*/
```