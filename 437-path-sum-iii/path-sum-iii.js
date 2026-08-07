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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(root === null) return 0;
    return (
        countPath(root, targetSum) +
        pathSum(root.left, targetSum) +
        pathSum(root.right, targetSum)
    )
};

function countPath(root, targetSum) {
    if(root === null) return 0;

    let count = 0;
    targetSum -= root.val;

    if(targetSum === 0) count++;

    count += countPath(root.left, targetSum);
    count += countPath(root.right, targetSum);

    return count;
}