# Many Javascript! Much Wow!

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

Now let's split the second element up into an array containing all the individual letters of the second element string in lowercase so that case sensitivity is eliminated:

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
		if(arr[0].toLowerCase().indexOf(arr1[i]) === -1){
			return false;
		}
	}
	return true;
}
```

`.indexOf()` = A method that will return the first index at which a given element can be found in an array. If the element is not present, -1 will be the output

### Falsey
Falsey values are defined to be: `false`,`null`,`0`,`""`,`undefined`, and `NaN`

Let's create a function that will remove all falsey values from a given array utilizing boolean objects and a method called `.filter()`

Let's make the general structure of the function first:

```Javascript
function bouncer(arr){
	//make algorithm
}
bouncer([7,'ate','',false,9]);
```

First we need to understand what the `.filter()` method does:

**.filter()** = A method that will pass elements through a test using another function and create another array containing those elements that pass said test

So before we even use `.filter()`, let's first make another function called `callback` which will implement a test that checks to see if an element in a given array is true or false. Technically the `callback` function would have 3 arguments (element,index,array) but we only care if the element or `value` in this case is true or false. If true, we will return the `value` of that element. If false, we will return an empty array:

```Javascript
function callback(value){
	if(value !== true){
		return value;
	}else{
		return [];
	}
}
function bouncer(arr){
	//use filter
}
```

Now we just need to call the `callback` function using the `.filter()` method and return the array the method creates after implementing the `callback` test:

```Javascript
function callback(value){
	if(value !== true){
		return value;
	}else{
		return [];
	}
}
function bouncer(arr){
	return arr.filter(callback);
}
bouncer([7,'ate','',false,9]); //Output: [7,'ate',9]
bouncer(['a','b','c']); //Output: ['a','b','c']
bouncer([false,null,0]); //Output: []
```

### Collecting
Let's make a functon that will iterate through a list/array and return an array full of objects that have the same property values from the initial list/array. This list/array will be the argument called `collection` while the property values we are trying to push into the array is an argument called `source` 

Here is what's given:

```Javascript
function where(collection,source){
	var arr = [];
	//make algorithm
	return arr;
}
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

where([{'a':1}, {'a':1}, {'a':1, 'b':2}], {'a':1});
```

We need to store the string of the array of a object's property into a variable. We do this by utilizing the `Object` constructor and `.keys()` method:

`Object` constructor = It will take any value it's given and make it an object. If it's given nothing, it will simply return an empty object

`.keys()` method = This method will produce an array of an object's properties while in this case, we only have 1 property from `source`:

```Javascript
function where(collection,source){
	var arr = [];
	var propname = Object.keys(source)[0]; //gives a string value of the property name
	console.log(key); //Output: 'last' 'a'
	return arr;
}
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

where([{'a':1}, {'a':1}, {'a':1, 'b':2}], {'a':1});
```

Next, we need to store the value of the property into a variable:

```Javascript
function where(collection,source){
	var arr = [];
	var propname = Object.keys(source)[0];
	var propvalue = source[propname];
	console.log(propvalue); //Output: Capulet 1
	return arr;
}
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

where([{'a':1}, {'a':1}, {'a':1, 'b':2}], {'a':1});
```

The variables `propname` and `propvalue` will be useful later on since we have a method that will utilize these values to make our function work!

Next step; create a for loop that will iterate through `collection` and check it for any objects that have the same property:

```Javascript
function where(collection,source){
	var arr = [];
	var propname = Object.keys(source)[0];
	var propvalue = source[propname];
	for(var x=0; x < collection.length; x++){
		if(/*hardest part of algorithm?*/){
			/*do something*/
		}
	}
	return arr;
}
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

where([{'a':1}, {'a':1}, {'a':1, 'b':2}], {'a':1});
```

What goes inside of this if statement is the main meat of this function. We need iterate through `collection` and return an array of objects that have the same property as `source`. We do this by utilizing a method called `.hasOwnProperty()`. This method will return a boolean that indicates whether a given object has a given property. This is where `propname` comes into play: