# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        return self.Helper(root, 0)
         

    def Helper(self, node, totalSum):
        if node == None:
            return 0
        totalSum = totalSum*10 + node.val
        if node.left == None and node.right == None:
            return totalSum
        return self.Helper(node.left, totalSum) + self.Helper(node.right, totalSum)
        
        