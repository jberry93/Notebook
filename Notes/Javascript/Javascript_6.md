# Lots to Learn!

### Roman Numerals
With this function, we want to convert a given number into its corresponding roman numeral

Here's the initial function:

```Javascript
function convert(num){
	/*Roman warfare*/
}
convert(36); //'XXXVI'
convert(12); //'XII'
convert(5); //'V'
convert(9); //'IX'
convert(29); //'XXIX'
convert(16); //'XVI'
```

To do this, we need to first make 2 arrays. One array will contain the string values of the roman numerals. We only need to include the roman numerals that could be reused multiple times like: 1, 4, 5, 9, and 10 whose corresponding roman numerals are; I, IV, V, IX, and X respectfully