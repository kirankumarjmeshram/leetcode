/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length;
    let maxProd = nums[0];
    for(let i=0;i<n;i++){
        let curr = nums[i]
        maxProd = Math.max(maxProd, curr)
        for(let j=i+1;j<n;j++){
            curr*=nums[j];
            maxProd = Math.max(curr, maxProd)
        }
    }
    return maxProd;

};
