/* DESCRIPTION: */
/* ==========================================================================
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume that the supplied array will not be empty.
========================================================================== */
/* My solution 
================================================ */
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
