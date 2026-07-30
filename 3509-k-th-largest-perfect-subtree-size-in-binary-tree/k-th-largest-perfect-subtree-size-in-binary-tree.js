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
        if(node === null){
            return {
                perfect : true,
                height :0,
                size:0
            }
        }
        let left = dfs(node.left);
        let right = dfs(node.right);

        if(left.perfect && right.perfect && left.height === right.height) {
            let size = 1 + left.size + right.size;
            let height =1 + left.height;
            sizes.push(size);

            return {
                perfect:true,
                height: height,
                size:size
            }
        };
        return {
            perfect : false,
            height :0,
            size:0           
        };
    }
    dfs(root);
    sizes.sort((a,b) => b-a);
    return k<= sizes.length?sizes[k-1]:-1;

    
};