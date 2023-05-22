import { expect } from "chai";
import { lowestCommonAncestor, lowestCommonAncestor2 } from "./lowest-common-ancestor-of-a-binary-search-tree";
import { createBST } from "../../helpful-functions/create-binary-search-tree/create-binary-search-tree";

describe('Lowest Common Ancestor of a Binary Search Tree, Easy, https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', () => {
  it('case 1', () => {
    const tree = createBST([6, 2, 8, 0, 4, 7, 9, 3, 5])
    const q = createBST([2, 0, 4, 3, 5])
    const p = createBST([8, 7, 9])
    expect(lowestCommonAncestor(tree, q, p)).to.be.eq(tree)
  })
  it('case 2 non-recursive', () => {
    const tree = createBST([6, 2, 8, 0, 4, 7, 9, 3, 5])
    const q = createBST([2, 0, 4, 3, 5])
    const p = createBST([8, 7, 9])
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