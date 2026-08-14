/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let n = s.length;
    let dp = new Array(n+1).fill(-1);
    return countDecodings(s,n, dp);
};

function countDecodings(digits, n, dp) {
    if(digits[0] == '0') return 0;
    if(n=== 0 || n===1) return 1;
    if(dp[n] != -1) return dp[n];
    let count = 0;
    if(digits[n-1] > "0"){
        count = countDecodings(digits, n-1, dp)
    } 

    if(digits[n-2] === '1' 
    || digits[n-2] ==='2' 
    && digits[n-1] <'7'){
        count += countDecodings(digits, n-2, dp)
    }
    dp[n] = count;
    return count;
}