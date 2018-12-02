/**
 * This is my collection of answers for the Warmup challenges
 * Note: These may not be the BEST answers but they are the first solutions that
 * I came up with that pass the set of test cases provided by Hackerrank
 */

// Simple Array Sum
function simpleArraySum(n, ar) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += ar[i] ? ar[i] : 0;
    }
    return sum;
}

// Compare the Triplets
function solve(a0, a1, a2, b0, b1, b2) {
    let A = 0;
    let B = 0;
    // I love the terseness of the ternary operator :)
    a0 > b0 ? (a0 !== b0 ? A++: null) : (a0 !== b0 ? B++ : null);
    a1 > b1 ? (a1 !== b1 ? A++: null) : (a1 !== b1 ? B++ : null);
    a2 > b2 ? (a2 !== b2 ? A++: null) : (a2 !== b2 ? B++ : null);
    return [A, B];
}

// A Very Big Sum
/**
 * Same as Simple Array Sum since the highest bit value that an integer
 * calculated by JavaScript is greater than 32 bits. The maximum bit value for
 * a JavaScript integer without losing precision is 53 bits.
 * Cite: https://stackoverflow.com/questions/4557509/javascript-summing-large-integers
 */

// Diagonal Difference
function solve(n, a) {
    let x = 0;
    let y = 0;
    let xcounter = 0;
    let ycounter = n - 1;
    for (let arr of a) {
        x += arr[xcounter];
        y += arr[ycounter];
        xcounter++;
        ycounter--;
    }
    let ans = x > y ? x - y : y - x;
    console.log(ans);
}

// Plus Minus
function solve(n, arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for (let i of arr) {
        i === 0 ? zero++ : (i > 0 ? pos++ : (i < 0 ? neg++ : null));
    }
    console.log((pos / n).toPrecision(6));
    console.log((neg / n).toPrecision(6));
    console.log((zero / n).toPrecision(6));
}


// Staircase
function solve(n) {
  let count = n;
  while (count > 0) {
    let row = '';

    for (let i = count - 1; i > 0; i--) {
      row += ' ';
    }
    for (let j = row.length; j < n; j++) {
      row += '#';
    }

    console.log(row);
    count--;
  }
}

// Min-Max Sum
function main() {
    arr = readLine().split(' '); // provided
    arr = arr.map(Number); // provided

    arr.sort();
    let min = 0;
    let max = 0;

    for (let i = 0; i < 4; i++) {
        min += arr[i];
    }

    for (let j = arr.length - 1; j > 0; j--) {
        max += arr[j];
    }

    console.log(min + ' ' + max);
};

// Birthday Cake Candles
/**
 *  Note: Not an ideal solution since I am using a hash table which involves key, pairs.
 *  An array of 'keys' and an array of 'values' may be better since I can return the last
 *  value of the values array as my answer.
 */
function birthdayCakeCandles(n, ar) {
    // Complete this function
    let table = {};

    // set up hash table
    for (let num of ar) {
        let key = num.toString();
        table[key] = 0;
    }

    // sort array from biggest to smallest number
    let sortedHeights = ar.sort((a, b) => (b - a));

    // account for each value and increase occurrence by one if prop exists
    for (let num of sortedHeights) {
        let key = num.toString();
        if (table.hasOwnProperty(key)) {
            table[key]++;
        }
    }

    /**
     *  since we have the answer in order on the table, all we need is the
     *  last value of the last key in the table. So we overwrite it to 'answer'
     */
    let answer = '';
    for (let key in table) {
        answer = table[key];
    }
    return answer;
}

// Time Conversion
function timeConversion(s) {
    const timeSplit = s.split(':');
    const AMorPM = timeSplit[2].slice(2);
    let hour = timeSplit[0];
    let minutes = timeSplit[1];
    let seconds = timeSplit[2].split('')[0] + timeSplit[2].split('')[1];

    if (hour === '12' && AMorPM === 'AM') {
        return `00:${minutes}:${seconds}`;
    }

    if (hour === '12' && AMorPM === 'PM') {
        return `12:${minutes}:${seconds}`;
    }

    if (AMorPM === 'PM') {
        return `${12 + Number(hour)}:${minutes}:${seconds}`;
    }

    if (AMorPM === 'AM') {
        return `${hour}:${minutes}:${seconds}`;
    }
}