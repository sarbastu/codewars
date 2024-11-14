/* DESCRIPTION: */
/* ==========================================================================
Given a number of points on a plane, your task is to find two points with 
the smallest distance between them in linearithmic O(n log n) time.

Example
  1  2  3  4  5  6  7  8  9
1  
2    . A
3                . D
4                   . F       
5             . C
6              
7                . E
8    . B
9                   . G


The two points that are closest to each other are D and F.
Expected answer should be an array with both points in any order.

The goal is to come up with a function that can find two closest points for 
any arbitrary array of points, in a linearithmic time.
========================================================================== */
/* My solution 
================================================ */
function closestPair(points) {
  let sortedPoints = points.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1])

  function dist(p1, p2) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
  }

  function baseCase(points) {
    let dis = Infinity
    let minDis = Infinity
    let minPoints = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        dis = dist(points[i], points[j])
        if (dis < minDis) {
          minDis = dis
          minPoints = [points[i], points[j]]
        }
      }
    }
    return [minPoints, minDis]
  }

  function closest(points) {
    if (points.length <= 3) return baseCase(points)

    const mid = Math.floor(points.length / 2)
    const midPoint = points[mid][0]

    const [lMinPoints, lMinDis] = closest(points.slice(0, mid))
    const [rMinPoints, rMinDis] = closest(points.slice(mid))
    const [minPoints, minDis] =
      lMinDis < rMinDis ? [lMinPoints, lMinDis] : [rMinPoints, rMinDis]

    const strip = []
    for (let i = 0; i < points.length; i++) {
      if (Math.abs(points[i][0] - midPoint) <= minDis) {
        strip.push(points[i])
      }
    }
    const [sMinPoints, sMinDis] = baseCase(strip)

    return minDis < sMinDis ? [minPoints, minDis] : [sMinPoints, sMinDis]
  }

  return closest(sortedPoints)[0]
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function closestPair(points) {
  const dist = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2

  let arr = points.sort((a, b) => a[0] - b[0])

  let res = []
  let min = Infinity

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i][0] - arr[j][0]) ** 2 > min) break

      if (dist(arr[i], arr[j]) < min) {
        min = dist(arr[i], arr[j])
        res = [arr[i], arr[j]]
      }
    }
  }
  return res
}
