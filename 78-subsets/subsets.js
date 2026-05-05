/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let n = nums.length;
    let subSets = [[]];
    for (let num of nums) {
        let length = subSets.length;
        for(let j = 0;j<length;j++){
            let subSet = subSets[j];
            subSets.push([...subSet, num])
            // subSets.push(subSet.concat(num))
        }
    }
    return subSets;
};