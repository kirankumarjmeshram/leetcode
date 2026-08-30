/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null;
    if(root === p || root === q) return root;
    let leftTree = lowestCommonAncestor(root.left, p, q);
    let rightTree = lowestCommonAncestor(root.right, p, q);
    if(leftTree !== null && rightTree !== null){
        return root
    }
    if(leftTree === null) {
        return rightTree;
    }
    return leftTree;
};