/* DESCRIPTION: */
/* ==========================================================================
For this challenge you need to create a simple SELECT statement that will 
return all columns from the people table WHERE their age is over 50
========================================================================== */
/* My solution 
================================================ */
SELECT
    *
FROM
    people
WHERE
    age > 50
ORDER BY
    age DESC;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
WITH
    old_people AS (
        SELECT
            *
        FROM
            people
        WHERE
            age > 50
    )
SELECT
    *
FROM
    old_people
ORDER BY
    age DESC;