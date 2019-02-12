/**
 * Sock Merchant
 * 
 * Return the total number of matching pairs of
 * socks where each number stands for a different
 * sock color
 * 
 * Sample Input:
 * 9
 * 10 20 20 10 10 30 50 10 20
 * 
 * Sample Output:
 * 3
 */
function sockMerchant(n, ar) {
    let i = 0,
        pairs = 0,
        socks = new Map();

    for (i; i < n; i++) {
        if (socks.has(ar[i])) {
            let count = socks.get(ar[i]) + 1;
            socks.set(ar[i], count);
        } else {
            socks.set(ar[i], 1);
        }
    }

    socks.forEach((value, key, map) => {
        pairs = pairs + Math.floor(value / 2);
    });

    return pairs;
}

/**
 * Counting Valleys
 * 
 * Return an integer that denotes the number
 * of valleys a hiker traversed. A valley
 * is when the hiker enters below sea level
 * and reenters sea level
 * 
 * Sample Input:
 * 8
 * UDDDUDUU
 * 
 * Sample Output:
 * 1
 */
function countingValleys(n, s) {
    let valleys = 0,
        seaLevelMeter = 0,
        step = 0,
        stepsArray = s.split(''),
        inValley = false;

    for (step; step < n; step++) {
        if (stepsArray[step] === 'U') {
            seaLevelMeter++;
        } else {
            seaLevelMeter--;
        }

        let previousInValley = inValley;
        inValley = seaLevelMeter < 0 ? true : false;

        if (previousInValley === false && inValley === true) {
            valleys++;
        }
    }
    
    return valleys;
}
