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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    Helper(root, arr);
    return arr;
};

function Helper(root, arr) {
    if(root === null) {
        return
    }
    Helper(root.left, arr);
    arr.push(root.val);
    Helper(root.right, arr)
}