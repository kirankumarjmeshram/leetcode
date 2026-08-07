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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    dfs(root, targetSum, [], result);
    return result;
};

function dfs(root, targetSum, path, result) {
    if(root === null) return;
    path.push(root.val)
    targetSum-=root.val;

    if(root.left === null && root.right === null && targetSum === 0){
        result.push([...path])
    }
    dfs(root.left, targetSum, path, result);
    dfs(root.right, targetSum, path, result);
    path.pop();

}

