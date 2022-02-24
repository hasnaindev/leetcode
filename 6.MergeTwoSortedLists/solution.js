/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor (val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  static print (list) {
    const buffer = []
    let current = list

    while (current) {
      buffer.push(current.val)
      current = current.next
    }

    console.log(buffer.toString())
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let head = null
  let current = head

  let currentL1 = list1
  let currentL2 = list2

  while (currentL1 || currentL2) {
    if (!currentL1 && currentL2) {
      const node = new ListNode(currentL2.val)

      if (!head) {
        head = current = node
      } else {
        current.next = node
        current = node
      }

      currentL2 = currentL2.next
      continue
    }

    if (!currentL2 && currentL1) {
      const node = new ListNode(currentL1.val)

      if (!head) {
        head = current = node
      } else {
        current.next = node
        current = node
      }

      currentL1 = currentL1.next
      continue
    }

    if (currentL2.val <= currentL1.val) {
      const node = new ListNode(currentL2.val)

      if (!head) {
        head = current = node
      } else {
        current.next = node
        current = node
      }

      currentL2 = currentL2.next
    } else {
      const node = new ListNode(currentL1.val)

      if (!head) {
        head = current = node
      } else {
        current.next = node
        current = node
      }

      currentL1 = currentL1.next
    }
  }

  return head
}

// const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

const list1 = undefined
const list2 = new ListNode(0)

ListNode.print(
  mergeTwoLists(
    undefined,
    new ListNode(0)
  )
)

ListNode.print(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
  )
)
