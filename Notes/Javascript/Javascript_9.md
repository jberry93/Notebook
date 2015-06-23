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