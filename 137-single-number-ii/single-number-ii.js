/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for(let num of nums) {
        if (!map[num]){
            map[num] = 1;
        }else{
             map[num]++;
        }
    }
    for(let e of Object.keys(map)){
        if (map[e] === 1) return +e;
    }
};