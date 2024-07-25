function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
var removeElements = function(head, val) {
    let dummy = new ListNode(0)
    dummy.next = head
    let current = dummy
    while(current.next !== null){
        if( current.next.val == val){
            current.next = current.next.next 
        }else{
        current = current.next

        }
    }
    return dummy.next

};
//Revised 2024/07/25 1:02 PM

// var removeElements = function(head, val) {
//     if(!head) return head
//     let dummy = new ListNode(0)
//     dummy.next = head
//     let current = dummy.next
//     let final = dummy
//     while(current){
//         if(current.val === val){
//             final.next = current.next
//         }else {
//             final = final.next
//             }
//         current = current.next
//     }
//     return dummy.next
    
// };