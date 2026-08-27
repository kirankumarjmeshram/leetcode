# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        self.Helper(root, result)
        return result
    def Helper(self,node, ans):
        if node is None:
            return
        self.Helper(node.left, ans)
        ans.append(node.val)
        self.Helper(node.right, ans)


    
        