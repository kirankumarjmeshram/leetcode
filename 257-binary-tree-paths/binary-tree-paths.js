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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    dfs(root, [], result);
    return result;
};

function dfs(root, path, result) {
    if(root === null) return;
    path.push(root.val);

    if(root.left === null && root.right === null ){
        result.push(path.join("->"))
    }
    dfs(root.left, path, result);
    dfs(root.right, path, result);
    path.pop();

}
