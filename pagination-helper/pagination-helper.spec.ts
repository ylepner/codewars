import { expect } from 'chai';
import { PaginationHelper } from './pagination-helper';


describe('PaginationHelper, 5kyu, https://www.codewars.com/kata/515bb423de843ea99400000a', () => {
  it('case 1', () => {
    const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
    expect(helper.pageCount()).to.be.eq(2)
    expect(helper.itemCount()).to.be.eq(6)
    expect(helper.pageItemCount(0)).to.be.eq(4)
    expect(helper.pageItemCount(1)).to.be.eq(2)
    expect(helper.pageItemCount(2)).to.be.eq(-1)
    expect(helper.pageIndex(5)).to.be.eq(1)
    expect(helper.pageIndex(2)).to.be.eq(0)
    expect(helper.pageIndex(20)).to.be.eq(-1)
    expect(helper.pageIndex(-10)).to.be.eq(-1)
  });
  it('pageIndex(0) should return -1 if there was an empty collection', () => {
    const helper = new PaginationHelper([], 4)
    expect(helper.pageIndex(0)).to.be.eq(-1)
  })
})
