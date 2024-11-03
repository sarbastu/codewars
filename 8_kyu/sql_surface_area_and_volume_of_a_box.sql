/* DESCRIPTION: */
/* ==========================================================================
Write a function that returns the total surface area and volume of a box as 
an array: [area, volume]

-- you are given a table 'box' with columns: width (int), height (int), 
depth (int)
-- return a query with columns: width, height, depth, area (int), 
volume (int)
-- sort results by area ascending, then volume ascending, then width 
ascending, then height ascending
========================================================================== */
/* My solution 
================================================ */
SELECT
    width,
    height,
    depth,
    (2 * width * height) + (2 * width * depth) + (2 * height * depth) AS area,
    (width * height * depth) AS volume
FROM
    box
ORDER BY
    area ASC,
    volume ASC,
    width ASC,
    height ASC;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
CREATE OR
REPLACE FUNCTION calculation (width INTEGER, height INTEGER, depth INTEGER) RETURNS TABLE (area INTEGER, volume INTEGER) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        2 * (width * height + width * depth + height * depth) AS area,
        width * height * depth AS volume;
END;
$$ LANGUAGE plpgsql;

SELECT
    b.width,
    b.height,
    b.depth,
    c.area,
    c.volume
FROM
    box b
    CROSS JOIN LATERAL calculation (b.width, b.height, b.depth) AS c
ORDER BY
    c.area,
    c.volume,
    b.width,
    b.height;