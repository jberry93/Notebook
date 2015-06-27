###Steamroller (Needs to be fixed!)
Here is the answer to this function. It is what I would call "brute force code" and needs to be worked on to be made recursive. A simple fix yet I have yet to figure out how to make it recursive:

```Javascript
function steamroller(arr){
    var newarr = [];
    var finalarr = [];
    for(var a=0;a < arr.length;a++){
        //console.log(Array.isArray(arr[a]));
        if(Array.isArray(arr[a]) == false){
            newarr.push(arr[a]);
            //console.log(newarr);
        }else{
            for(var b=0;b < arr[a].length;b++){
                //console.log(arr[a][b]);
                if(Array.isArray(arr[a][b]) == false){
                    newarr.push(arr[a][b]);
                }else{
                    for(var c=0;c < arr[a][b].length;c++){
                        //console.log(arr[a][b][c]);
                        if(Array.isArray(arr[a][b][c]) == false){
                            newarr.push(arr[a][b][c]);
                        }else{
                            for(var d=0;d < arr[a][b][c];d++){
                                if(Array.isArray(arr[a][b][c][d]) == false){
                                    newarr.push(arr[a][b][c][d]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    for(var e=0;e < newarr.length;e++){
        if(newarr[e] !== undefined){
            finalarr.push(newarr[e]);
        }
    }
    console.log(finalarr);
}
steamroller([1,[2],[3,[[4]]]]); //[1,2,3,4]
steamroller([[['a']],[['b']]]); //['a','b']
steamroller([1,[],[3,[[4]]]]); //[1,3,4]
```

### Binary
Let's make a function that will take in a string `str` containing binary code. This function will translate the binary code into a sentence. We will be using a collection of different methods to make this function work

Here is the initial function:

```Javascript
function binaryAgent(str){
	/*binary converter*/
}
binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
//Output: Aren't bonfires fun!?

binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001');
//Output: I love FreeCodeCamp!
```

The methods and function we will be using are `.match()`, `.map()`, `String.fromCharCode()`, `parseInt()` (the function), and `.join()`:

**.match()** = This method will look at an indicated string and take in a regular expression that matches characters within that string. For more details check out MDN's explanation on [.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

Syntax example: 
```Javascript
string.match(/\W/g);
```

**.map()** = This method will initiate a callback function on the elements of an array and create a new array containing the results of the callback. For more details check out MDN's explanaton on [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Syntax example:
```Javascript
array.map(callback);
```

**String.fromCharCode()** = This method will take in unicode and convert it to a string and return it. For more details check out MDN's explanation on [String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

Syntax example:
```Javascript
String.fromCharCode(/*Unicode values*/);
```

**parseInt()** = Like the name suggests, this function will parse a string and return an integer indicative of the corresponding radix passed into it. To parse a string is to analyze a string by testing its ability to conform to logical grammar. A radix is a base for mathmatical numeral systems ranging from 2 to 36. For the radix in this case, we will use the integer 2 since binary is a base-2 numeral system represented by intergers 0 and 1. For more details check out MDN's explanation on [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

Syntax example:
```Javascript
parseInt('binary code',2);
```

**.join()** = This method takes in an array and joins all the elements of the array together into a string depending on the separator passed into the method. For more details check out MDN's explanation on [.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

Syntax example:
```Javascript
array.join('');
```

First thing we need to do is initialize a variable which will take in all the string values that `.match()` our regular expression. In this case, we want to grab all of the binary codes without any spaces:

```Javascript
function binaryAgent(str){
	var binaryToWord = str.match(/[10]{8}/g);
}
/*test cases*/
```

What we are doing with this `.match()` method is selecting all strings containing 1s and 0s (brackets) in groups of 8 characters (curly brace)

Now we will apply the `.map()` method:

```Javascript
function binaryAgent(str){
	var binaryToWord = str.match(/[10]{8}/g).map(function(binary){
		/*callback function*/
	});
}
/*test cases*/
```

Now we need to use `String.fromCharCode()` along with `parseInt()`. We will pass in `binary` and `2` into `parseInt()` and return everything. What this collection of methods will do is read the binary string under radix 2 and parse it. From there, `String.fromCharCode()` will take in the value of the parse and return the letter corresponding to the binary code:

```Javascript
function binaryAgent(str){
	var binaryToWord = str.match(/[10]{8}/g).map(function(binary){
		return String.fromCharCode(parseInt(binary,2));
	});
}
/*test cases*/
```

What we have now is an array containing the corresponding strings of translated binary code. All that is left is to `.join()` all the elements of this array together and return it as a string value: 