/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let list = [];
    while(head){
        list.push(head.val);
        head = head.next;
    }
    return Helper(list, 0, list.length -1 )
};
function Helper(nums, left, right) {
    if(left > right ){
        return null;
    }

    let mid = Math.floor(left + (right - left)/2);
    let root = new TreeNode(nums[mid]);
    root.left = Helper(nums, left, mid-1);
    root.right = Helper(nums, mid+1, right);
    return root;
}