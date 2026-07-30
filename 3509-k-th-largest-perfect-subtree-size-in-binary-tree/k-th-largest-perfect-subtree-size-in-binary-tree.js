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
 * @param {number} k
 * @return {number}
 */
var kthLargestPerfectSubtree = function(root, k) {
    let sizes = [];
    function dfs (node) {
        if(node === null) return 0

        let left = dfs(node.left);
        let right = dfs(node.right);

        if(left === right) {
            let size = 1 + left.size + right.size;
            let height =1 + left.height;
            sizes.push(left+right+1);

            return left+right+1
        };
        return -1;
    }
    dfs(root);
    sizes.sort((a,b) => b-a);
    return k<= sizes.length?sizes[k-1]:-1;    
};