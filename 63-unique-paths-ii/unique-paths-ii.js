/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from({length:m},()=>new Array(n).fill(0));
    let flag = false //flag remembers whether an obstacle has already blocked the path, so every cell beyond that obstacle in the first row/column gets 0
    for(let i=0;i<m;i++) {
        if(flag || obstacleGrid[i][0]){
            flag = true
            dp[i][0] = 0;
        }else{
            dp[i][0] = 1;
        }
    }
    flag = false;
    for(let j=0;j<n;j++) {
        if(flag || obstacleGrid[0][j]){
            flag = true
            dp[0][j] = 0;
        }else{
            dp[0][j] = 1;
        }
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++) {
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0;
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
            
        }
    }
    return dp[m-1][n-1];
};