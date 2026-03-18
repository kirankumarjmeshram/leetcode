/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    let curr = 0;
    for(let num of nums){
        if(num === 1){
            curr++;
            res = Math.max(res,curr)
        }else{
            curr = 0
        }
    }
    return res;
};