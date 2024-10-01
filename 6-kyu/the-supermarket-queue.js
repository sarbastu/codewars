/* DESCRIPTION: */
/* ==========================================================================
There is a queue for the self-checkout tills at the supermarket. Your task 
is write a function to calculate the total time required for all the 
customers to check out!

input
- customers: an array of positive integers representing the queue. Each 
integer represents a customer, and its value is the amount of time they 
require to check out.
- n: a positive integer, the number of checkout tills.

output
The function should return an integer, the total time required.
========================================================================== */
/* My solution 
================================================ */
function queueTime(customers, n) {
  let tills = []
  let smallestTillIndex = 0

  for (let i = 0; i < n; i++) {
    tills[i] = customers[i] || 0
  }

  for (let i = n; i < customers.length; i++) {
    smallestTillIndex = tills.indexOf(Math.min(...tills))
    tills[smallestTillIndex] += customers[i]
  }

  return Math.max(...tills)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function queueTime(customers, n) {
  var w = new Array(n).fill(0)
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w))
    w[idx] += t
  }
  return Math.max(...w)
}
