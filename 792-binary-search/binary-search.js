/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n=nums.length;
    let l=0, h=n-1;
    while(l<=h){
        let mid = Math.floor(l + (h-l)/2);
        if(nums[mid]===target) {
            return mid;
        }else if(nums[mid]<target){
            l = mid+1;
        }else{
            h=mid-1;
        }
    }
    return -1;
};