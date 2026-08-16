class Solution:
    def rob(self, nums: List[int]) -> int:
        # n = len(nums)
        # dp = [0]*(n+1)
        # dp[1] = nums[0]
        # for i in range(1,n):
        #     dp[i+1] = max(dp[i-1]+nums[i], dp[i])
        # return dp[n]
        rob1 , rob2 = 0,0
        for n in nums:
            temp= max(rob2, rob1+n)
            rob1=rob2
            rob2 = temp
        return rob2