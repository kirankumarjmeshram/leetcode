/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct =  0;

    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
                let product = (nums[i] - 1) * (nums[j] - 1);
                if( product > maxProduct){
                    maxProduct = product;
                }
            }
        }
    return maxProduct;
}