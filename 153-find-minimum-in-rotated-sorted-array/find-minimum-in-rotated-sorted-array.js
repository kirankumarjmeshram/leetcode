/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
     let n = nums.length;
    let l = 0;
    let h = n-1;
    while(l<h) {
        let m = Math.floor(l+(h-l)/2);
        if(nums[m]> nums[h]){
            l = m+1;
        }else{
            h=m
        }
    }
    return nums[l];
};