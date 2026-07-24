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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if(root===null) return result;
    let queue = [root];
    while(queue.length > 0) {
        let n = queue.length;
        let level = [];
        for(let i=0; i<n;i++) {
            let curr = queue.shift();
            level.push(curr.val)
            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);
        }
        result.push(level);
    }
    return result;
};