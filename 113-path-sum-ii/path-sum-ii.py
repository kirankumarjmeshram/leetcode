# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        result = []
        self.Helper(root, targetSum, [], result)
        return result


    def Helper(self, root, targetSum,path, result):
        if root == None:
            return []
        path.append(root.val)
        targetSum -= root.val
        if root.left == None and root.right == None and targetSum == 0:
            result.append(path.copy())
        self.Helper(root.left, targetSum,path, result) 
        self.Helper(root.right, targetSum,path, result)
        path.pop()
        