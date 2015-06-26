###Steamroller
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