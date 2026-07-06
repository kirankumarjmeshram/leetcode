/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length;
    let maxSum = nums[0];
    let sum = 0;

    for(let i=0;i<n;i++) {
        sum += nums[i];
        if(sum > maxSum){
            maxSum = sum
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};