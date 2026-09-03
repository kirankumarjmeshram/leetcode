/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let n = nums.length;
    let mid = Math.floor((n+1)/2);
    let leftNums = nums.slice(0,mid);
    let rightNums = nums.slice(mid);

    for(let i=0;i<n;i++) {
        nums[i] = i%2===0?leftNums.pop():rightNums.pop()
    }
    return nums;
};