/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let ans = nums[0]
    let ans = 0;
    for(let i=0;i<nums.length;i++) {
        ans^=nums[i]
    }
    return ans;
};