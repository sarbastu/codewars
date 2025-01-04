/* DESCRIPTION: */
/* ==========================================================================
Complete the method/function so that it converts dash/underscore delimited 
words into camel casing. The first word within the output should be
 capitalized only if the original word was capitalized (known as Upper 
 Camel Case, also often referred to as Pascal case). The next words should 
 be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
========================================================================== */
/* My solution 
================================================ */
function toCamelCase(str) {
  return str
    .split(/[-_]/g)
    .map((e, i) => {
      if (i === 0) {
        return e ? e[0] + e?.toLowerCase().slice(1) : e;
      }
      return e[0].toUpperCase() + e.toLowerCase().slice(1);
    })
    .join('');
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
