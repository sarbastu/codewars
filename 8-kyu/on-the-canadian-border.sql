/* DESCRIPTION: */
/* ==========================================================================
Select names, and countries of origin of all the travelers, excluding anyone from Canada, Mexico, or The USA.

travelers table schema:
name
country
========================================================================== */
/* My solution 
================================================ */
SELECT
    name,
    country
FROM
    travelers
WHERE
    country NOT IN('Canada', 'Mexico', 'USA');

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
SELECT
    name,
    country
FROM
    travelers
WHERE
    country IS NULL OR
    country NOT IN('Canada', 'Mexico', 'USA')