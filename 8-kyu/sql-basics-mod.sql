/* DESCRIPTION: */
/* ==========================================================================
Given the following table 'decimals':

 ** decimals table schema **

id
number1
number2

Return a table with one column (mod) which is the output of number1 modulus 
number2.
========================================================================== */
/* My solution 
================================================ */
SELECT
    number1 % number2 AS mod
FROM
    decimals;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
select
    mod(number1, number2) as mod
from
    decimals