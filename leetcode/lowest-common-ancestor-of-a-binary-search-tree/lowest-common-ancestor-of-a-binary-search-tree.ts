import { TreeNode } from "./lowest-common-ancestor-of-a-binary-search-tree.spec";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }
  if (p !== null && q !== null) {
    if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q)
    }
    else if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q)
    }
    else {
      return root
    }
  }
  return root
};

export function lowestCommonAncestor2(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }
  let currentNode: TreeNode | null = root
  while (currentNode) {
    if (p !== null && q !== null) {
      if (p.val < currentNode.val && q.val < currentNode.val) {
        currentNode = currentNode.left
      }
      else if (p.val > currentNode.val && q.val > currentNode.val) {
        currentNode = currentNode.right
      }
      else {
        return currentNode
      }
    }
  }
  return root
};