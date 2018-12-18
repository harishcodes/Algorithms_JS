/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    var length = 1;
    var dummy = new ListNode(0);
    dummy.next = head;
    var current = head;
    while (current.next){
        current = current.next;
        length++;
    }
    
    if (length === 1 )
    {
        return null;
    }
    
    var i = length - n;
    var current = dummy;
    while (i > 0){
        i--;
        current = current.next;
    }
    
    current.next = current.next.next
    //console.log(dummy.next);
    return dummy.next;
};