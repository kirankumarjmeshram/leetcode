/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let n = nums.length;
    let newArr = new Array(n).fill(0);
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if((nums[i]> nums[j]) && i!==j){
                newArr[i]++
            }
        }
    }
    return newArr;
};