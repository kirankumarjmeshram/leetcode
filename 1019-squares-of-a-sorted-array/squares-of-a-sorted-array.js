/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let ans = [];
    for(let i=0;i<n; i++) {
        nums[i] = nums[i]*nums[i]
    }
    let left = 0, right = n-1, position = n-1;
    for(let i=0;i<n;i++){
        if(nums[left] > nums[right]){
            ans[position] = nums[left];
            left++;
            position--;

        }else{
            ans[position]=nums[right]
            position--;
            right--
        }
    }
    return ans;
};