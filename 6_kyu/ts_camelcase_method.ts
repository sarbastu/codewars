/* DESCRIPTION: */
/* ==========================================================================
Write a method (or function, depending on the language) that converts a 
string to camelCase, that is, all words must have their first letter 
capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
========================================================================== */
/* My solution 
================================================ */
export function camelCase(str: string): string {
  console.log(str)
  return str
    ? str
        .split(' ')
        .map((e) => `${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`)
        .join('')
    : ''
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
export function camelCase(str: string): string {
  return str
    .split(' ')
    .map((s: string): string => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}
