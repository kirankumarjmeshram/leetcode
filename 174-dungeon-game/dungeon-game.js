/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length;
    let n = dungeon[0].length;
    let dp = Array.from({length:m}, ()=>new Array(n).fill(0));

    dp[m-1][n-1] = Math.max(1, 1-dungeon[m-1][n-1]);

    for(let i=m-1;i>=0;i--) {
        for(let j=n-1;j>=0;j--) {
            if(i === m-1 && j === n-1) {
                continue;
            }if(i === m-1) {
                let h = dp[i][j+1] - dungeon[i][j]
                dp[i][j] = Math.max(1, h);
            }else if(j === n-1) {
                let h = dp[i+1][j] - dungeon[i][j];
                dp[i][j] = Math.max(1, h);
            }else{
                let h = Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j];
                dp[i][j] = Math.max(1, h);
            }
        }
    }
    return dp[0][0];
};