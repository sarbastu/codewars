/* DESCRIPTION: */
/* ==========================================================================
Write a function that accepts an integer n and a string s as parameters, and 
returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
========================================================================== */
/* My solution 
================================================ */
SELECT
    s,
    n,
REPEAT (s, n) as RES
FROM
    repeatstr;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
CREATE OR
REPLACE
    FUNCTION fkt (i int, t text) RETURNS text LANGUAGE 'plpgsql' AS $$ DECLARE res text := '';

BEGIN
WHILE i > 0
LOOP i := i -1;

res := CONCAT(res, t);

END
LOOP;

RETURN res;

END;

$$;

SELECT
    s,
    n,
    fkt (n, s) AS res
FROM
    repeatstr