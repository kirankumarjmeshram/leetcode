/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let xor = n;
    let ans = n;
    for(let i=0;i<n;i++){
        // xor ^= i^nums[i]
        ans +=i-nums[i];
    }
    return ans;
};