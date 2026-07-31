/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0;
    let curr = head;
    while(curr){
        count++;
        curr = curr.next
    }
    if(count === n) return head.next;
    curr = head;
    for(let i=0;i <count-n-1;i++){
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return head;
};