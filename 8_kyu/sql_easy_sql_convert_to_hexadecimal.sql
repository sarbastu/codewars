/* DESCRIPTION: */
/* ==========================================================================
to hexYou have access to a table of monsters as follows:

monsters table schema
- id
- name
- legs
- arms
- characteristics

Your task is to turn the numeric columns (arms, legs) into equivalent 
hexadecimal values.

output table schema
- legs
- arms
========================================================================== */
/* My solution 
================================================ */
SELECT
    TO_HEX (legs) AS legs,
    TO_HEX (arms) AS arms
FROM
    monsters;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
SELECT
    TO_HEX (legs) legs,
    TO_HEX (arms) arms
from
    monsters;