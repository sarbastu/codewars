/* DESCRIPTION: */
/* ==========================================================================
An infinite number of shelves are arranged one above the other in a staggered 
fashion. The cat can jump either one or three shelves at a time: from shelf i 
to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above it), 
according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
========================================================================== */
/* My solution 
================================================ */
function solution(start, finish) {
  for (var i = 0; start < finish; i++) {
    start += start + 3 > finish ? 1 : 3;
  }
  return i;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const solution = (start, finish, difference = finish - start) =>
  Math.floor(difference / 3) + (difference % 3);
