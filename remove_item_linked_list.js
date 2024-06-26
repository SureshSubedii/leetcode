function ListNode (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0)
  dummy.next = head

  let slow = dummy
  let fast = dummy

  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }

  while (fast !== null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next

  return dummy.next
}
removeNthFromEnd(
  {
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
    }
  },
  2
)
