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
	return num;
}
factorialize(5);
```

A factorial is when a number is multiplied by all numbers between 1 and that number. An example can be: `5!`

This means: `5 * 4 * 3 * 2 * 1`