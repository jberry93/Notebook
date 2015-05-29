# Javascript Notes

### Reverse a String

```Javascript
function reverseString(str){
	return str;
};
reverseString('hello');
```

Use a variety of methods to split the string up each letter, reverse the order of the letters, and finally put them back together:

```Javascript
function reverseString(str){
	return str.split('').reverse().join('');
}
reverseString('hello');
```