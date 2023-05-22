function insertNode(root: TreeNode | null, val: number): TreeNode {
  const newNode = new TreeNode(val);

  if (root === null) {
    return newNode;
  }

  let current = root;

  while (true) {
    if (val < current.val) {
      if (current.left === null) {
        current.left = newNode;
        break;
      } else {
        current = current.left;
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
        break;
      } else {
        current = current.right;
      }
    }
  }

  return root;
}

export function createBST(values: number[]): TreeNode | null {
  let root: TreeNode | null = null;

  for (let i = 0; i < values.length; i++) {
    root = insertNode(root, values[i]);
  }

  return root;
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}