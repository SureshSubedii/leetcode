function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const removeNodes = function(head) {
    if (!head || !head.next) return head;

    let reversedHead = reverseList(head);

    let dummy = new ListNode(0);
    dummy.next = reversedHead;
    
    let max = reversedHead.val;
    let current = reversedHead.next;
    let prev = reversedHead;

    while (current !== null) {
        if (current.val < max) {
            prev.next = current.next;
        } else {
            max = current.val;
            prev = current;
        }
        current = current.next;
    }

    return reverseList(dummy.next);
};

const reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};