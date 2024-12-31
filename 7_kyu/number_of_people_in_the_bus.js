/* DESCRIPTION: */
/* ==========================================================================
There is a bus moving in the city which takes and drops some people at each 
bus stop.

You are provided with a list (or array) of integer pairs. Elements of each 
pair represent the number of people that get on the bus (the first item) and 
the number of people that get off the bus (the second item) at a bus stop.
========================================================================== */
/* My solution 
================================================ */
var number = function (busStops) {
  return busStops.reduce((c, e) => c + (e[0] - e[1]), 0);
};

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const number = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);
