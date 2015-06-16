### Missing Letters
Make a function that will take in a string that is a range of letters. Check the string for any missing letters and return the letters missing from the range. If there are no letters missing, return `undefined`

Here's the initial function:

```Javascript
function fearNotLetter(str){
	/*letter detective*/
}
fearNotLetter('abce'); //'d'
fearNotLetter('bcd'); //undefined
fearNotLetter('abcdefghjklmno'); //'i'
fearNotLetter('yz'); //undefined
```

Our strategy for making this function will be to have 2 different for loops and an if statement after the for loops:

**First for loop** = This for loop will iterate through the given string `str`, add up all the unicode values given by the method `.charCodeAt()` and set that sum equal to a variable `sumunistr`:



**Second for loop** = This for loop will iterate through all the letters between the first letter and the last letter given in `str`, add up all the unicode values given by the same method as above and set that sum equal to a variable `sumunialpha`

**if statement** = This if statement will check to see if the unicode sums equal each other. If they do not equal, subtract the two unicode sums and use the method `.fromCharCode()` to return the letter that is missing from the given letter range. If they do equal, return `undefined`