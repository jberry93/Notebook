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