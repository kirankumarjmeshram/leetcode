class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        singleNum = 0
        for num in nums:
            singleNum ^= num
        return singleNum