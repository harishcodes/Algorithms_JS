/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    var dummy = new ListNode(0);
    var list1 = dummy;
    
    while (l1 && l2){
        if (l1.val > l2.val){
            list1.next = l2;
            l2 = l2.next;
        } else {
            list1.next = l1;
            l1 = l1.next;
        }
        list1 = list1.next;
        
    }
    
    

    list1.next = l1 || l2;
    
    
    return dummy.next;
    
};