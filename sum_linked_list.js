 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let current = head;
    let carry = 0
    let p1= l1
    let p2=l2

    while(p1 != null || p2 != null){
        let v1 = p1? p1.val : 0
        let v2 = p2? p2.val :0
        let sum = v1 + v2 + carry;
        carry = Math.floor(sum/10)
        current.next = new ListNode(sum%10)
        current = current.next
        if(p1) p1 = p1.next
        if (p2) p2 = p2.next
    }
    if(carry > 0){
        current.next = new ListNode(carry)
    }
    return head.next
    
    
   ;
};
console.log(addTwoNumbers( {val: 5, next:{val: 4,next:{val:3, next: null}}}, {val: 5, next:{val: 6,next:{val:8 , next: null}}}))