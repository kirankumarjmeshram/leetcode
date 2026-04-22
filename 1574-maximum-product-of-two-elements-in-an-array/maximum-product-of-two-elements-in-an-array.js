/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length;
    let firstMax = 0, secondMax = 0;
    if(nums[0]>nums[1]){
        firstMax = nums[0];
        secondMax = nums[1]
    }else{
        firstMax = nums[1];
        secondMax = nums[0]     
    }
    for (let i=2;i<n;i++) {
        if(nums[i] > secondMax){
            secondMax = nums[i]
        }
        if(secondMax> firstMax){
            let temp = firstMax;
            firstMax =secondMax;
            secondMax = temp
        }
    }
    return (firstMax-1)*(secondMax-1);
};