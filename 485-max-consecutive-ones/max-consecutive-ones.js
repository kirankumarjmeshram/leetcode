/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let curr = 0;
    let max = 0;
    for(let num of nums){
        if(num===1){
            curr++;
            max = Math.max(max, curr)
        }else{
            curr = 0;
        }
    }
    return max;
}