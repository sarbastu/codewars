/* DESCRIPTION: */
/* ==========================================================================
Write a function that when given a URL as a string, parses out just the 
domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
========================================================================== */
/* My solution 
================================================ */
function domainName(url) {
  let sourceString = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split(/[/?#]/)[0]
  let domain = sourceString.split('.')[0]
  return domain
}

//original solution that does not work with the codewars client
function domainName(url) {
  let el = document.createElement('a')
  el.href = url
  return el.hostname
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function domainName(url) {
  url = url.replace('https://', '')
  url = url.replace('http://', '')
  url = url.replace('www.', '')
  return url.split('.')[0]
}
