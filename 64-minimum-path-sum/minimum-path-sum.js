/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = Array.from({length:m+1}, ()=> new Array(n+1).fill(Infinity))
    dp[m][n-1] = 0;

    for(let i=m-1; i>=0; i--) {
        for(let j=n-1;j>=0;j--) {
            dp[i][j] = grid[i][j] + Math.min(dp[i][j+1] , dp[i+1][j])
        }
    }
    return dp[0][0]
};