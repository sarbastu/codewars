/* DESCRIPTION: */
/* ==========================================================================
Write a function, which takes a non-negative integer (seconds) as input and 
returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
========================================================================== */
/* My solution 
================================================ */
function humanReadable(seconds) {
  let h = '0' + Math.floor(seconds / 60 / 60);
  let m = '0' + (Math.floor(seconds / 60) % 60);
  let s = '0' + (seconds % 60);

  return `${h.slice(-2)}:${m.slice(-2)}:${s.slice(-2)}`;
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function humanReadable(seconds) {
  var pad = function (x) {
    return x < 10 ? '0' + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ':' +
    pad(parseInt((seconds / 60) % 60)) +
    ':' +
    pad(seconds % 60)
  );
}
