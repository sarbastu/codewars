/* DESCRIPTION: */
/* ==========================================================================
Write function RemoveExclamationMarks which removes all exclamation marks 
from a given string.
========================================================================== */
/* My solution 
================================================ */
SELECT
    s,
REPLACE
    (s, '!', '') as res
FROM
    RemoveExclamationMarks;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
CREATE OR
REPLACE
    FUNCTION RemoveExclamationMarks (s TEXT) RETURNS TEXT LANGUAGE plpgsql AS $$ BEGIN
RETURN TRANSLATE (s, '!', '');

END $$;

SELECT
    s,
    RemoveExclamationMarks (s) res
FROM
    removeexclamationmarks;