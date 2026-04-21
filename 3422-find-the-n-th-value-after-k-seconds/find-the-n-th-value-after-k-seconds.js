/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
    let modulo = 1000000007
    let arr = new Array(n).fill(1);
    for(let i=0;i<k;i++) { 
        for(let j=1;j<n;j++) {
            arr[j] = (arr[j]+arr[j-1])% modulo
        }
    }
    return arr[n-1]
};