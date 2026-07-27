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
var countNodes = function(root) {
        function leftHeight(node) {
        let h = 0;
        while (node) {
            h++;
            node = node.left;
        }
        return h;
    }

    function rightHeight(node) {
        let h = 0;
        while (node) {
            h++;
            node = node.right;
        }
        return h;
    }

    if (root === null) return 0;
    let lh = leftHeight(root);
    let rh = rightHeight(root);

    if (lh === rh) {
        return Math.pow(2, lh) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
    // if(root===null){
    //     return 0;
    // }
    // return 1 + countNodes(root.left) + countNodes(root.right);
    // if (root === null) return 0;

    // let queue = [root];
    // let count = 0;

    // while (queue.length) {
    //     let node = queue.shift();
    //     count++;

    //     if (node.left) queue.push(node.left);
    //     if (node.right) queue.push(node.right);
    // }

    // return count;
};