/* DESCRIPTION: */
/* ==========================================================================
You are given a binary tree:

class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}
Your task is to return the list with elements from tree sorted by levels, 
which means the root element goes first, then root children (from left to 
right) are second and third, and so on.

Return empty array if root is null.

Example 1 - following tree:

                 2
            8        9
          1  3     4   5
Should return following list:

[2,8,9,1,3,4,5]
Example 2 - following tree:

                 1
            8        4
              3        5
                         7
Should return following list:

[1,8,4,3,5,7]
========================================================================== */
/* My solution 
================================================ */
function treeByLevels(rootNode) {
  if (!rootNode) return [];

  let res = [];
  let que = [rootNode];

  while (que.length > 0) {
    let curr = que.shift();
    res.push(curr.value);
    if (curr.left) que.push(curr.left);
    if (curr.right) que.push(curr.right);
  }
  return res;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function treeByLevels(rootNode) {
  const queue = [rootNode];
  const values = [];

  while (queue.length) {
    let node = queue.shift();

    if (node) {
      values.push(node.value);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return values;
}
