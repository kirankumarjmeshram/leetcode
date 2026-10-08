
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = nums.reduce((a,b) => {return a+b},0);
    let n = nums.length;
    if(total %2 !== 0) return false;
    let target = total/2
    let dp = new Array(target+1).fill(false);
    dp[0] = true;
    for(let num of nums){
        for(let i=target;i>=num;i--){
            if(dp[i-num]){
                dp[i] = true;
            }
        }
    }
    return dp[target]
};