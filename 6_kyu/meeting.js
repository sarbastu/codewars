/* DESCRIPTION: */
/* ==========================================================================
John has invited some friends. His list is:
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:
Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that
- makes this string uppercase
- gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name 
and first name of a guest come in the result between parentheses 
separated by a comma.

So the result of function meeting(s) will be:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)
(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name 
two people have the same first name too.
========================================================================== */
/* My solution 
================================================ */
function meeting(s) {
  return (
    '(' +
    s
      .toUpperCase()
      .split(';')
      .map((w) => w.split(':').reverse())
      .sort()
      .map((w) => w.join(', '))
      .join(')(') +
    ')'
  );
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const processAttendees = pipe(parse, sort, serialize);

function meeting(attendees) {
  return processAttendees(attendees.toUpperCase());
}

function parse(attendees) {
  return attendees.split(';').map(function (attendee) {
    return attendee.split(':');
  });
}

function sort(list) {
  return list.sort(function (a, b) {
    return compare(a[1], b[1]) || compare(a[0], b[0]);
  });
}

function serialize(list) {
  return list.reduce(function (result, attendee) {
    return `${result}(${attendee.reverse().join(', ')})`;
  }, '');
}

function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

function pipe(...fns) {
  return function (x) {
    return fns.reduce(function (y, z) {
      return z(y);
    }, x);
  };
}
