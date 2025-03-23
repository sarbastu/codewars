/* DESCRIPTION: */
/* ==========================================================================
For this exercise you will be strengthening your page-fu mastery. You will 
complete the PaginationHelper class, which is a utility class helpful for 
querying paging information related to an array.

The class is designed to take in an array of values and an integer 
indicating how many items will be allowed per each page. The types of 
values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
========================================================================== */
/* My solution 
================================================ */
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection || [];
    this.itemsPerPage = itemsPerPage || 1;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    const totalItems = pageIndex * this.itemsPerPage;
    if (totalItems < 0 || totalItems >= this.itemCount()) return -1;
    return Math.min(this.itemCount() - totalItems, this.itemsPerPage);
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
    if (this.collection.length === 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  var pagecount = this.pageCount();
  if (pageIndex < 0 || pageIndex >= pagecount) return -1;
  if (pageIndex == pagecount - 1) {
    return (
      this.itemCount() -
      Math.floor(this.itemCount() / this.itemsPerPage) * this.itemsPerPage
    );
  }
  return this.itemsPerPage;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  var page = Math.floor(itemIndex / this.itemsPerPage);
  if (page >= this.pageCount() || page < 0) return -1;
  return page;
};
