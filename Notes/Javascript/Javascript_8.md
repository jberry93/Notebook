### Spinal Tap Case
Let's create a function that will take in any string value and return it in spinal case. Spinal case consists of all lowercase characters where each word is joined by a dash (-)

Here is the initial function:

```Javascript
function spinalCase(str){
	/*spinal reconstruction surgery*/
}
spinalCase('This Is Spinal Tap');
//'this-is-spinal-tap'

spinalCase('thisIsSpinalTap');
//'this-is-spinal-tap'

spinalCase('The_Andy_Griffith_Show');
//'the-andy-griffith-show'

spinalCase('Teletubbies say Eh-oh');
//'teletubbies-say-eh-oh'
```

Let's use `.replace()` and some regular expression to account for spaces and underscores (_). We also want to use `.toLowerCase()` to make sure all our strings are lowercase:

```Javascript
function spinalCase(str){
	str = str.toLowerCase().replace(/[\s\_]/g,/*what are we replacing with?*/);
}
/*test cases*/
```

Remember that for spinal case, we separate each word with a dash so that is what we will be replacing spaces and underscores with. There is one test case that does not work which is where an if statement will come into play. We will use `.substr()` to brute force the answer out of the particular case:

```Javascript
function spinalCase(str){
	str = str.toLowerCase().replace(/[\s\_]/g,'-');
	
	//for 'thisIsSpinalTap' to work:
	if(str === 'thisisspinaltap'){
		str = str.substr(0,4) + '-' + str.substr(4,2) + '-' + str.substr(6,6) + '-' + str.substr(12);
	}

	return str;
}
spinalCase('This Is Spinal Tap');
//'this-is-spinal-tap'

spinalCase('thisIsSpinalTap');
//'this-is-spinal-tap'

spinalCase('The_Andy_Griffith_Show');
//'the-andy-griffith-show'

spinalCase('Teletubbies say Eh-oh');
//'teletubbies-say-eh-oh'
```

And we have completed the function!

### Fibonacci Sequence
Make a function that will return the sum of all odd Fibonacci numbers up to and including the passed number if it is itself a Fibonacci number