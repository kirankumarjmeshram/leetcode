/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subSets = [];
    Helper(nums,subSets,[],0);
    return subSets;
};

function Helper(nums,subSets,current,index) {
    if(index===nums.length) {
        subSets.push(current);
        return;
    }
    Helper(nums,subSets,current,index+1);
    Helper(nums,subSets,[...current, nums[index]],index+1)
}