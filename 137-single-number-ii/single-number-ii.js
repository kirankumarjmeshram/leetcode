/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for(let num of nums) {
        map[num] = (map[num] || 0) +1
    }
    for(let e of Object.keys(map)){
        if (map[e] === 1) return +e;
    }
};