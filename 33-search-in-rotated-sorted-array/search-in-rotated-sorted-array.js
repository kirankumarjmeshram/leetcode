/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    let l = 0;
    let h = n-1;
    while(l<=h) {
        let m = Math.floor(l+(h-l)/2);
        if(nums[m]===target){
            return m;
        }else if(nums[l]<=nums[m]){
            if((target<nums[m])&& target>=nums[l]){
                 h= m-1;
            }else{
                l = m+1
            }
           
        }else{
            if((target > nums[m]) && (target <= nums[h])){
                l = m+1
            }else{
                h=m-1
            }
            
        }
    }
    return -1;
};