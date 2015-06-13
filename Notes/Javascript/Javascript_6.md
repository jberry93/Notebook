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