### Smallest Common Multiple
This function will take in an array containing 2 numbers which indicates a range. The job of this function is to find the least common multiple that is evenly divisibly by every number in this range

Here's the initial function:

```Javascript
function smallestCommons(arr){
	/*Least Common Multiple*/
}
smallestCommons([1,5]); //60
smallestCommons([5,1]); //60
smallestCommons([1,13]); //360360
```

We will be using more Greek mathematics in this case but before that we need to set up the function so that we can feed the algorithm ('Greek mathematics' part) an array of all the numbers in the range so let's first make that array:

```Javascript
function smallestCommons(arr){
	var rangeArr = [];
	for(var j=Math.min(arr[0],arr[1]);j<=Math.max(arr[0],arr[1]);j++){
		rangeArr.push(j);
	}
}
/*test cases*/
```

So what this for loop will do is start from the smallest number of the 2 elements in the `arr` array and iterate up to and including the largest of the 2 elements in `arr` and push each number into the empty array `rangeArr`. This way, we have an array of all the numbers in our range!

Let's make another for loop that will iterate through each element of `rangeArr`, not including the first element which we will set equal to variable `a`. The purpose of this will be clearer later on:

```Javascript
function smallestCommons(arr){
	var rangeArr = [];
	for(var j=Math.min(arr[0],arr[1]);j<=Math.max(arr[0],arr[1]);j++){
		rangeArr.push(j);
	}
	var a = rangeArr[0];
	for(var i=1;i < rangeArr.length;i++){
		/*Euclidean Algorithm*/
	}
}
/*test cases*/
```

And here is where Greek mathematician [Euclid](https://en.wikipedia.org/wiki/Euclid) comes into play! His [algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) is a very efficient way to calculate the greatest common divisor(GCD). The [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm) is the largest possible number that divides evenly into 2 given numbers