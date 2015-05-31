# Javascript Notes

### Reverse a String

```Javascript
function reverseString(str){
	return str;
};
reverseString('hello');
```

Use a variety of methods to split the string up into each letter, reverse the order of the letters, and finally put them back together:

```Javascript
function reverseString(str){
	return str.split('').reverse().join('');
}
reverseString('hello');
```

### Factorial algorithm
Create an algorithm that will return the factorial of any number given to it:

```Javascript
function factorialize(num){
	//insert algorithm here
	return num;
}
factorialize(5);
```

A factorial is when a number is multiplied by all numbers between 1 and that number. An example can be: `5!`

This means: `5 * 4 * 3 * 2 * 1`

Therefore we need to take the number given and subtract 1 from it each time before multiplying to the number given:

```Javascript
function factorialize(num){
	if(num===0){
	return 0;
	}if(num===1){
	return 1;
	}if(num>1){
	//algorithm goes here:
	return num * factorialize(num-1);
	}
	return num;
}
factorialize(5) //will return 120
```

### Palindromes
Let's make an algorithm that will check if a given string is a plaindrome. If it's a palindrome, return 'true', if not, return 'false'. A palindrome is a word or sentence that's spelled the same way forwards and backwards while ignoring punctuation, upper/lower case, and spacing.

Here's what's given:

```Javascript
function palindrome(str){
	//create algorithm here:
	return true;
}
palindrome('eye');
```

We can refer to the **Reverse a String** section above to reverse our word:

```Javascript
str.split('').reverse().join('')
```

Which will take a string, split up each letter, reverse the order of the letters, and join them back together (in that order). Let's insert that into what's given:

```Javascript
function palindrome(str){
	//create algorithm here:
	if(str.split('').reverse().join('')===str){
		return true;
	}else{
	return false;
	}
}
palindrome('eye');
```

Well `palindrome(str)` works only if the `str` is a single word or if `str` is not a plaindrome but we need it to work for everything that is a plaindrome which can include sentences (with spaces and/or punctuation) like: 'never odd or even' or 'race car' or 'A man, a plan, a canal. Panama'

Regular Expression: `\w\s?\,?\s?` = Will match everything in:

```
never odd or even
race car
a man, a plan, a canal.
```

Regular Expression: `\W` = Will match all spaces and punctuation which is exactly what we want to select!

We can utilize this RegExp to `.replace()` the spaces and punctuation with nothing at all so that all the characters in the string are smashed into one long string. Apply `.toLowerCase()` to make sure all characters are of one case and then split/reverse/join:

```Javascript
function palindrome(str){
	//create algorithm here:
	if(str.toLowerCase().replace(/\W/g,'').split('').reverse().join('')===str.toLowerCase().replace(/\W/g,'')){
		return true;
	}else{
		return false;
	}
}
palindrome('eye');
```

To explain `.replace()` we need to input 2 things: 1) What we want to select and 2) What we want to replace what we selected. We select characters via RegExp: `/(insert RegExp here)/g` and then replace it with nothing: `.replace(/\W/g,'')` which means take all the spaces and punctuation and replace it with absolutely nothing since we didn't specify anything within `''`

