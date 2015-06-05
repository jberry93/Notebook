# Many Javascript! Much Wow!

![Image of Doge]
(http://shibemart.com/static/media/uploads/services/vryhckr/.thumbnails/programmer-555x0.jpg)

### Mutations
Make a function whose argument is an array with 2 strings. If the first element string in the array has all the letters of the second element string in the same array then return true. If not, return false.

Here's the basic setup of our function:

```Javascript
function mutation(arr){
	//make algorithm
}
mutation(['hello','hey']); //false
mutation(['Mary','Aarmy']); //false
mutation(['Alien','line']); //true
```

Since we are comparing 2 strings, we need to make an if statement since if all the letters within the first string are contained within the second string then we will return true:

```Javascript
function mutation(arr){
	if(/*something*/){
		return true;
	}else{
		return false;
	}
}
mutation(['hello','hey']); //false
mutation(['Mary','Aarmy']); //false
mutation(['Alien','line']); //true
```