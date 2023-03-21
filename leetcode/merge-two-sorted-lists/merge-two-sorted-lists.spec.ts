import { expect } from "chai";
import { ListNode, mergeTwoLists } from "./merge-two-sorted-lists";

describe('Merge Two Sorted Lists, Easy, https://leetcode.com/problems/merge-two-sorted-lists/', () => {
  it('case 1', () => {
    const linkedList1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    const linkedList2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const result = mergeTwoLists(linkedList1, linkedList2)
    expect(toArray(result)).to.be.deep.eq([1, 1, 2, 3, 4, 4])
  })
})

function toArray(head: ListNode | null) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
