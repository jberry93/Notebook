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