/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    helper(0, nums, result);
    return result;
};

function helper(i, nums, result){
    if(i===nums.length-1){
        result.push(nums.slice());
        return;
    }else{
        for(let j=i;j<nums.length;j++){
            swap(i,j,nums);
            helper(i+1,nums,result);
            swap(i,j,nums)
        }
    }
}

function swap(i,j,nums) {
    let temp;
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}