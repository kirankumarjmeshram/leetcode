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
 * @return {number}
 */
var sumNumbers = function(root) {
    return Helper(root, 0)
};

function Helper(root, totalSum){
    if(root === null) return 0;
    totalSum = totalSum*10 + root.val;
    if(root.left === null && root.right === null ) return totalSum;
    return Helper(root.left, totalSum) + Helper(root.right, totalSum);
}