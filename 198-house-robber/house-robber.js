/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i=1;i<n;i++) {
        dp[i+1] = Math.max(dp[i], dp[i-1] + nums[i])
    }
    return dp[n]
};