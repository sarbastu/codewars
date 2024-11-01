/* DESCRIPTION: */
/* ==========================================================================
Write a function which reduces fractions to their simplest form! 
Fractions will be presented as an array/tuple (depending on the language) 
of strictly positive integers, and the reduced fraction must be returned as 
an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]

-- you are given a table 'fraction' with columns 'numerator' (int) and 
'denominator' (int)

-- return a query with columns 'numerator', 'denominator', 
'reduced_numerator' (int) and 'reduced_denominator' (int)

-- sort results by column 'numerator' ascending, then by 'denominator' 
ascending
========================================================================== */
/* My solution 
================================================ */
CREATE OR
REPLACE FUNCTION gcd(a INT, b INT) RETURNS INT AS $$
BEGIN
    WHILE b <> 0 LOOP
        DECLARE
            temp INT;
        BEGIN
            temp := b;
            b := a % b;  
            a := temp;   
        END;
    END LOOP;
    RETURN a;  
END;
$$ LANGUAGE plpgsql;

SELECT
    numerator,
    denominator,
    numerator / gcd(numerator, denominator) AS reduced_numerator,
    denominator / gcd(numerator, denominator) AS reduced_denominator
FROM
    fraction
ORDER BY
    numerator ASC,
    denominator ASC;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
select
    *,
    numerator / gcd(numerator, denominator) as reduced_numerator,
    denominator / gcd(numerator, denominator) as reduced_denominator
from
    fraction
order by
    1,
    2;