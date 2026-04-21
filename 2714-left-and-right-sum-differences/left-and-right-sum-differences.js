/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let ans = []; n= nums.length,curr = 0, leftSum = new Array(n).fill(0), rightSum = new Array(n).fill(0);
    for(let i=1;i<n;i++) {
        curr+=nums[i-1];
        leftSum[i] = curr
    }
    curr = 0;
    for(let i=n-2;i>=0;i--) {
        curr += nums[i+1];
        rightSum[i] = curr
    }
    for(let i=0;i<n;i++){
        ans[i] = Math.abs(leftSum[i]-rightSum[i])
    }
    return ans;
};

// [10,4,8,3]//25
//[ 0, 10, 14, 22 ] [ 15, 11, 3, 0 ]
//[15, 1, 11, 22]