/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let n = nums.length;
    if(n<2) return 0;
    let gap =0;
    nums = nums.sort((a,b) => a-b);
    for(let i=1;i<n;i++) {
        if(nums[i] -nums[i-1] > gap){
            gap = nums[i] -nums[i-1]
        }
    }
    return gap;
};