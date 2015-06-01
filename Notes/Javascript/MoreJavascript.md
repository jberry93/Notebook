# More Javascript Notes!

### Title Case a Sentence
Here is what's given:

```Javascript
function titleCase(str){
	//make an algorithm
}
titleCase('I'm a little tea pot');
```

Our mission is to return the given string with the first letter of each word capitalized: `I'm A Little Tea Pot`

We can utilize regular expression to select all the text without the spaces so that when we use `.charAt()` we are referring to multiple strings and not just one long single string with spaces. We utilize regular expression using the `.replace()` method. Here is what it should look like for now:

```Javascript
function titleCase(str){
	return str.replace(/\w+\'?\w?/g, /*We need a function here to upper-case the first character of each string*/);
}
titleCase('I'm a little tea pot');
```

**RegExr explanation** = So why do we use `\w+\'?\w?`? First of all, we need to make sure there is at least one character that is a letter to capitalize which is matched with `\w+`. Next we need to match the cases that may possibly have a `'` like `I'm` or `you're`, etc. Those cases are matched using `\'?`. Finally we need to capture everything after `'` being that there are most likely letters after `'`: `\w?`. 

**Function explanation** = Another function that will upper-case the first letter and lower-case the remaining letters is a simple way of completing the overall function. We must use a combination of methods to complete this function within a function; `.charAt()`, `.toUpperCase()`, `.substring()`, and `.toLowerCase()`:

```Javascript
function upperCase(string){
	return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}
```

Now that we have formed our `upperCase`function, let's insert it into our original `titleCase` function:

```Javascript
function titleCase(str){
	return str.replace(/\w+\'?\w?/g, function upperCase(string){
		return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	});
}
titleCase('I'm a little tea pot');
```

`.substring()` = Will output everything after a given index

`.charAt()` = Will choose a character at an indicated index

And we are done! Output should be: `I'm A Little Tea Pot`