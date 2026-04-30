/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // let ans = nums[0]
    let n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans ^= nums[i]
    }
    return ans;
};