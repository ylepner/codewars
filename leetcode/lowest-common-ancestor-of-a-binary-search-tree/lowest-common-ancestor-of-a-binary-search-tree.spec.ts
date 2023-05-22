import { expect } from "chai";
import { lowestCommonAncestor, lowestCommonAncestor2 } from "./lowest-common-ancestor-of-a-binary-search-tree";

describe('Lowest Common Ancestor of a Binary Search Tree, Easy, https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', () => {
  it('case 1', () => {
    const tree = new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3, new TreeNode(5)))), new TreeNode(8, new TreeNode(7), new TreeNode(9)))
    const q = new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3, new TreeNode(5))))
    const p = new TreeNode(8, new TreeNode(7), new TreeNode(9))
    expect(lowestCommonAncestor(tree, q, p)).to.be.eq(tree)
  })
  it('case 2 non-recursive', () => {
    const tree = new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3, new TreeNode(5)))), new TreeNode(8, new TreeNode(7), new TreeNode(9)))
    const q = new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3, new TreeNode(5))))
    const p = new TreeNode(8, new TreeNode(7), new TreeNode(9))
    expect(lowestCommonAncestor2(tree, q, p)).to.be.eq(tree)
  })
})

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}