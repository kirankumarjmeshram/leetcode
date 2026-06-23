/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums = nums.map((num,index)=>[num,index]).sort((a,b)=> a[0]-b[0]);
    let left = 0;
    let right = nums.length-1;
    while(left<right) {
        let sum = nums[left][0] + nums[right][0]
        if(sum===target) {
            return [ nums[left][1], nums[right][1]]
        }else if(sum<target){
            left++;
        }else{
            right--;
        }
    }
};