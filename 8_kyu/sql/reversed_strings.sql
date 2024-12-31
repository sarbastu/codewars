/* DESCRIPTION: */
/* ==========================================================================
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

write your SQL statement here: you are given a table 'solution' with 
column 'str', return a table with column 'str' and your result in a column 
named 'res'.
========================================================================== */
/* My solution 
================================================ */
SELECT
  str,
  REVERSE(str) AS res
FROM
  solution;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
CREATE OR
REPLACE FUNCTION myrevFCT (text) RETURNS text AS $$
SELECT
  array_to_string (
    ARRAY (
      SELECT
        substring($1, s.i, 1)
      FROM
        generate_series (length($1), 1, -1) AS s (i)
    ),
    ''
  );

$$ LANGUAGE SQL IMMUTABLE STRICT;

SELECT
  str,
  myrevFCT (str) AS res
from
  solution;