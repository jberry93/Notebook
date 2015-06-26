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

The methods we will be using are `.match()`, `.map()`, `String.fromCharCode()`, `parseInt()`, and `.join()`:

**.match()** = This method will look at an indicated string and take in a regular expression that matches characters within that string

Syntax example: 
```Javascript
string.match(//*regexpr*//g);
```