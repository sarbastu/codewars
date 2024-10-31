/* DESCRIPTION: */
/* ==========================================================================
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or "r", you are playing banjo!
========================================================================== */
/* My solution 
================================================ */
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') +
    ' banjo'
  )
}
