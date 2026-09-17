/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let n = nums.length;
    let dp = [...nums];

    let deque = new Array();
    let front = 0;
    let back = 0;

    for(let i=0; i<n;i++) {
        while( front < back && deque[front] < i-k) {
            front++;
        }
        if(front<back) {
            dp[i] = Math.max(dp[i], nums[i]+dp[deque[front]]);
        }
        while(front < back && dp[deque[back-1]] <= dp[i]) {
            back--;
        }
        deque[back++] = i;
    }

    return Math.max(...dp)
};