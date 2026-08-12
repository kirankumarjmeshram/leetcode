/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from({length:m},()=>new Array(n).fill(1));
    // for(let i=1;i<m;i++){
    //     for(let j=1;j<n;j++) {
    //         dp[i][j] = dp[i-1][j] + dp[i][j-1];
    //     }
    // }
    // return dp[m-1][n-1];
    for(let i=m-2;i>=0;i--){
        for(let j=n-2;j>=0;j--) {
            dp[i][j] = dp[i+1][j] + dp[i][j+1];
        }
    }
    return dp[0][0];
};