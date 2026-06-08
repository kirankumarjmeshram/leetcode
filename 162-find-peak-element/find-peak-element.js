/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length;
    for(let i=1;i<n-1;i++){
        if((nums[i-1]<nums[i]) && (nums[i+1]<nums[i])) {
            return i;
        }
    }
    return (nums[0]<nums[1])? n-1:0;
};