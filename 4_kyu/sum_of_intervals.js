/* DESCRIPTION: */
/* ==========================================================================
Write a function called sumIntervals/sum_intervals that accepts an array of 
intervals, and returns the sum of all the interval lengths. Overlapping 
intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. 
The first value of the interval will always be less than the second value. 
Interval example: [1, 5] is an interval from 1 to 5. The length of this 
interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] 
overlap, we can treat the interval as [1, 5], which has a length of 4.

Your algorithm should be able to handle large intervals. All tested 
intervals are subsets of the range [-1000000000, 1000000000].
========================================================================== */
/* My solution 
================================================ */
function sumIntervals(intervals) {
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  let merged = [sorted[0]];
  for (const [a, b] of sorted) {
    let idx = merged.length - 1;

    a < merged[idx][1]
      ? (merged[idx][1] = Math.max(merged[idx][1], b))
      : merged.push([a, b]);
  }
  return merged.reduce((a, e) => (a += e[1] - e[0]), 0);
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function sumIntervals(xs) {
  let ys = xs.sort(([a, b], [c, d]) => a - c);
  let m = -Number.MAX_VALUE;
  let res = 0;
  for (let [a, b] of ys) {
    m = Math.max(m, a);
    res += Math.max(0, b - m);
    m = Math.max(m, b);
  }
  return res;
}
