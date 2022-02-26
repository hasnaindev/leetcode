/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 *
 * @see https://leetcode.com/problems/merge-two-sorted-lists
 */
 const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) return null
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }

  list2.next = mergeTwoLists(list1, list2.next)
  return list2
}
