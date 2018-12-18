/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    console.log('printing head')
     console.log(head)
    //printVal(head);
    let dummy = new ListNode(0);
    let list1 = dummy;
    while (head !== null && head.next !== null){
        let next = head.next.next;
        let headnext = head.next;
        list1.next = headnext;
        headnext.next = head;
        //printVal(headnext);
        console.log('print bef')
        console.log(list1);
        list1 = head;
        console.log('print aft')
        console.log(list1);
        head = next;
    }
    
    if (head !== null) {
        list1.next = head;
        head.next = null;
    } else {
        list1.next = null;
    }
    
    console.log(dummy.next);
};



var ll = new ListNode(1);
console.log(ll);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);

console.log(ll);
function printVal(list){
    console.log('------NEW------');
    console.log(list)
    while(list){
        console.log(list.val + "->");
        list = list.next;
    }
    console.log('------END------');
}

swapPairs(ll);

 function ListNode(val) {
   this.val = val;
   this.next = null;
 }