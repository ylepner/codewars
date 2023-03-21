export function invertTree(root: TreeNode | null): TreeNode | null {
  let queue = [root]
  while (queue.length > 0) {
    let root = queue.shift()
    if (root) {
      const temp = root.left
      root.left = root.right
      root.right = temp
      if (root.left) {
        queue.push(root.left)
      }
      if (root.right) {
        queue.push(root.right)
      }
    }
  }
  return root
};

export class TreeNode {
  val: number | null
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? null : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}