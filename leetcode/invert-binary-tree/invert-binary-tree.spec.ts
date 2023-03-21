import { expect } from "chai";
import { invertTree, TreeNode } from "./invert-binary-tree";

describe('Merge Two Sorted Lists, Easy, https://leetcode.com/problems/merge-two-sorted-lists/', () => {
  it('case 1', () => {
    const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3))
    const result = invertTree(tree)
    expect(toArray(result)).to.be.deep.eq([2, 3, 1])
  })
  it('case 2', () => {
    const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))
    const result = invertTree(tree)
    expect(toArray(result)).to.be.deep.eq([4, 7, 2, 9, 6, 3, 1])
  })
  it('case 3', () => {
    const tree = new TreeNode()
    const result = invertTree(tree)
    expect(toArray(result)).to.be.deep.eq([])
  })
})

function toArray(tree: TreeNode | null) {
  let result = []
  let queue = [tree]
  while (queue.length > 0) {
    const root = queue.shift()
    if (root) {
      if (root.val === null && root.left === null && root.right === null) {
        return []
      }
      result.push(root.val)
      if (root.left) {
        queue.push(root.left)
      }
      if (root.right) {
        queue.push(root.right)
      }
    }
  }
  return result
}