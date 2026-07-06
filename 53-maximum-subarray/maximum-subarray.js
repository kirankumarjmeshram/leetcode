/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length;
    let maxSum = nums[0];
    let sum = nums[0];

    for(let i=1;i<n;i++) {
        // sum += nums[i];
        // if(sum > maxSum){
        //     maxSum = sum
        // }
        // if(sum < 0) {
        //     sum = 0;
        // }
        sum = Math.max(nums[i], sum + nums[i]);
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
};