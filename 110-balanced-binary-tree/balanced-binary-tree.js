/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) {
        return true;
    }
    let left = checkHeight(root.left);
    let right = checkHeight(root.right);
    if(Math.abs(left-right) > 1){
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right);

};

function checkHeight(root){
    if(root===null) {
        return 0;
    }
    return 1+ Math.max(checkHeight(root.left), checkHeight(root.right));
} 