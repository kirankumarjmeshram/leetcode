/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let n = nums.length;
    for(let i=0;i<n;i++){
        sum+=nums[i]
        nums[i]=sum;
    }
    return nums;
};