/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n=nums.length;
    // for(let i=0;i<n;i++){
    //     for(let j=i+1;j<n;j++){
    //         if((nums[i]+nums[j])===target){
    //             return [i,j]
    //         }
    //     }
    // }
    let map = {};
    for (let i=0;i<n;i++) {
        let num = nums[i];
        let complement = target-num
        if(complement in map){
            return [i, map[complement]]
        }
        map[num] = i
    }
};