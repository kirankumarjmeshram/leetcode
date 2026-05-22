/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = 1, min = 1000;
    for(let num of nums){
        if(num < min) min = num;
        if(num > max) max = num;
    }
    while(min){
        [max,min]=[min, max%min]
    }
    return max;
};