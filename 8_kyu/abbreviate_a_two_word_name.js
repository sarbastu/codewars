/* DESCRIPTION: */
/* ==========================================================================
Write a function to convert a name into initials. This kata strictly takes 
two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
patrick feeney => P.F
========================================================================== */
/* My solution 
================================================ */
function abbrevName(name) {
  return name
    .split(' ')
    .map((e) => e[0].toUpperCase())
    .join('.');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const abbrevName = (name) => name.match(/\b\w/g).join('.').toUpperCase();
