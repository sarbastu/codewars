/* DESCRIPTION: */
/* ==========================================================================
A string is considered to be in title case if each word in the string is 
either (a) capitalised (that is, only the first letter of the word is in 
upper case) or (b) considered to be an exception and put entirely into lower 
case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an 
optional list of exceptions (minor words). The list of minor words will be 
given as a string with each word separated by a space. Your function should 
ignore the case of the minor words string -- it should behave in the same way 
even if the case of the minor word string is changed.

Arguments (Other languages)
- First argument (required): the original string to be converted.
- Second argument (optional): space-delimited list of minor words that must 
  always be lowercase except for the first word in the string. The 
  JavaScript tests will pass undefined when this argument is unused.
========================================================================== */
/* My solution 
================================================ */
function titleCase(title, minorWords) {
  return (
    title.slice(0, 1).toUpperCase() +
    title
      .replace(/(\S+)/g, (match) =>
        minorWords
          ?.toLowerCase()
          .split(' ')
          .some((e) => e === match.toLowerCase())
          ? match.toLowerCase()
          : match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
      )
      .slice(1)
  );
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function titleCase(title, minorWords) {
  var minorWords =
    typeof minorWords !== 'undefined'
      ? minorWords.toLowerCase().split(' ')
      : [];
  return title
    .toLowerCase()
    .split(' ')
    .map(function (v, i) {
      if (v != '' && (minorWords.indexOf(v) === -1 || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    })
    .join(' ');
}
