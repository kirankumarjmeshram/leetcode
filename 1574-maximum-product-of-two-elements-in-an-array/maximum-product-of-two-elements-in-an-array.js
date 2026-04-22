/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length;
    let firstMax = 0, secondMax = 0;
    // for (let i=0;i<n;i++) {
    //     if(nums[i] > secondMax){
    //         secondMax = nums[i]
    //     }
    //     if(secondMax> firstMax){
    //         let temp = firstMax;
    //         firstMax =secondMax;
    //         secondMax = temp
    //     }
    // }
    for(let num of nums) {
        if(num > firstMax){
            secondMax = firstMax;
            firstMax = num;
        }else if(num > secondMax){
            secondMax = num;
        }
    }
    return (firstMax-1)*(secondMax-1);
};