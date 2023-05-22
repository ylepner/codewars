import { expect } from 'chai';
import { createBST } from './create-binary-search-tree';

describe('Create BST', () => {
  it('case 1', () => {
    const values = [6, 2, 8, 0, 4, 7, 9, 3, 5];
    const tree = createBST(values)
    expect(tree).to.exist;
    expect(tree?.val).to.be.eq(6);
    expect(tree?.left?.val).to.be.eq(2);
    expect(tree?.right?.val).to.be.eq(8);
    expect(tree?.left?.left?.val).to.be.eq(0);
    expect(tree?.left?.right?.val).to.be.eq(4);
    expect(tree?.right?.left?.val).to.be.eq(7);
    expect(tree?.right?.right?.val).to.be.eq(9);
    expect(tree?.left?.right?.left?.val).to.be.eq(3);
    expect(tree?.left?.right?.right?.val).to.be.eq(5);
  });
})