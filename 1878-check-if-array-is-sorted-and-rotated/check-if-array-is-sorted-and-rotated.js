/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let fault = 0;
    // as array is rotary there will be only one case where nums[i-1]>nums[i] 
    //as array is non decreasing order else other will be nums[i-1] < nums[i]
    let n = nums.length;
    for(let i=0;i<n;i++) {
        if(nums[i]>nums[(i+1)%n]){
            if(fault) return false;
            fault = 1;
        }
        
    }
    return true;
};