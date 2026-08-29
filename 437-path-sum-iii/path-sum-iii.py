# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        if root == None:
            return 0
        return self.countSum(root, targetSum) + self.pathSum(root.left, targetSum) + self.pathSum(root.right, targetSum)

    def countSum(self, root, targetSum) :
        count = 0
        if root == None:
            return 0
        targetSum -= root.val
        if targetSum == 0:
            count+=1
        count+=self.countSum(root.left, targetSum) 
        count+=self.countSum(root.right, targetSum)
        return count
