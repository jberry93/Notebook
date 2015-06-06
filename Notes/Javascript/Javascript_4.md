# Many Javascript! Much Wow!

![Image of Doge]
(http://shibemart.com/static/media/uploads/services/vryhckr/.thumbnails/programmer-555x0.jpg)

### Mutations
Make a function whose argument is an array with 2 strings. If the first element in the array has all the letters of the second element in the same array then return true. If not, return false.

Here's the basic setup of our function:

```Javascript
function mutation(arr){
	//make algorithm
}
mutation(['hello','hey']); //false
mutation(['Mary','Aarmy']); //false
mutation(['Mary','Army']); //true
mutation(['Alien','line']); //true
mutation(['hello','Hello']); //true
mutation(['floor','for']); //true
mutation(['zyxwvutsrqponmlkjihgfedcba','qrstu']); //true
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
mutation(['Mary','Army']); //true
mutation(['Alien','line']); //true
mutation(['hello','Hello']); //true
mutation(['floor','for']); //true
mutation(['zyxwvutsrqponmlkjihgfedcba','qrstu']); //true
```

Instead of focusing our if statement on what makes something true, let's focus on what makes it false. First of all, if the length of the first element is less than the length of the second element then the first element cannot possible contain all the letters of the second element:

```Javascript
function mutation(arr){
	if(arr[0].length < arr[1].length){
		return false;
	}
}
```

Now let's split the second element up into an array containing all the individual letters of the second element string:

```Javascript
function mutation(arr){
	var arr1 = arr[1].toLowerCase().split('');
	if(arr[0].length < arr[1].length){
		return false;
	}
}
```

We now need to iterate through the individual letters of the second element string array `arr1` and apply another if statement which checks to see if each letter is present in the first element string:

```Javascript
function mutation(arr){
	var arr1 = arr[1].toLowerCase().split('');
	if(arr[0].length < arr[1].length){
		return false;
	}
	for(var i=0; i < arr[1].length; i++){
		if(arr[0].toLowerCase().indexOf(arr1[i])===-1){
			return false;
		}
	}
	return true;
}
```

