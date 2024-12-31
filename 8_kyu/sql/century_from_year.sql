/* DESCRIPTION: */
/* ==========================================================================
The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
========================================================================== */
/* My solution 
================================================ */
SELECT
    ((yr - 1) / 100) + 1 AS century
FROM
    years;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
SELECT
    CEILING(yr / 100.00) AS Century
FROM
    years;