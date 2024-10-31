/* DESCRIPTION: */
/* ==========================================================================
Make a program that filters a list of strings and returns a list with only 
your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a 
friend of yours! Otherwise, you can be sure he's not...
========================================================================== */
/* My solution 
================================================ */
function friend(friends) {
  return friends.filter((e) => e.length === 4)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
