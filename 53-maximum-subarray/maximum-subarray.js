/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = nums[0]
    let n = nums.length;

    for(let i=1; i<n;i++) {
        currSum = Math.max(nums[i],currSum+nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
};