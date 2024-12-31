/* DESCRIPTION: */
/* ==========================================================================
** Input: date in format: **

Day: one or two digits

Month: one or two digits

Year: four digits

Hours, Minutes, Seconds, Milliseconds: 0

** Output: timestamp (in seconds!) if date is correct or "Invalid date" **

** Example: **
date: 15-06-2014 -> timestamp [s]: 1402790400
date: 35.03.2015 -> "Invalid date"
========================================================================== */
/* My solution 
================================================ */
function timestampFromDate(str) {
  let [d, m, y] = str.split(/[-.,/~]/g).map(Number);
  let t = new Date(y, m - 1, d);
  return t.getDate() + t.getMonth() + t.getFullYear() - (d + m + y - 1) === 0
    ? Math.floor(t.getTime() / 1000)
    : 'Invalid date!';
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function timestampFromDate(str) {
  const match = /^(\d{1,2})\s*-\s*(\d{1,2})\s*-\s*(\d{3,4})$/.exec(str);
  if (match) {
    const day = +match[1];
    const month = +match[2] - 1;
    const year = +match[3];
    const date = new Date(year, month, day);
    if (
      day === date.getDate() &&
      month === date.getMonth() &&
      year === date.getFullYear()
    ) {
      return date.getTime() / 1000;
    }
  }
  return 'Invalid date!';
}
