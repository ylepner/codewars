export class PaginationHelper<T> {

  constructor(private collection: T[], private itemsPerPage: number) {
  }

  // returns the number of items within the entire collection
  itemCount() {
    return this.collection.length
  }

  // returns the number of pages
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage)
  }

  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  pageItemCount(pageIndex: number) {
    if (pageIndex >= this.pageCount()) {
      return -1
    }
    if (pageIndex + 1 === this.pageCount()) {
      return this.collection.length % this.itemsPerPage
    }
    return this.itemsPerPage
  }

  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  pageIndex(itemIndex: number) {
    if (itemIndex > this.collection.length || itemIndex < 0 || this.collection.length === 0) {
      return -1
    }
    return Math.floor(itemIndex / this.itemsPerPage)
  }
}