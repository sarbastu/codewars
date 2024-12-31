/* DESCRIPTION: */
/* ==========================================================================
Practise some SQL fundamentals by making a simple database on a topic you 
feel familiar with. Or use mine, populated with a wealth of Sailor Moon 
trivia.

sailorsenshi schema
- id
- senshi_name
- real_name_jpn
- school_id
- cat_id

cats schema
- id
- name

schools schema
- id
- school

Return a results table - sailor_senshi, real_name, cat and school - of all 
characters, containing each character's high school, their civilian name and 
the cat who introduced them to their magical crime-fighting destiny.

Keep in mind some senshi were not initiated by a cat guardian and one is 
not in high school. The field can be left blank if this is the case.
========================================================================== */
/* My solution 
================================================ */
SELECT
    ss.senshi_name as sailor_senshi,
    ss.real_name_jpn as real_name,
    c.name as cat,
    s.school
FROM
    sailorsenshi ss
    LEFT JOIN cats c ON ss.cat_id = c.id
    LEFT JOIN schools s ON ss.school_id = s.id;

/* ===============================================
 * Solution by other users (usually highest voted) 
================================================ */
SELECT
    senshi_name AS sailor_senshi,
    real_name_jpn AS real_name,
    cats.name AS cat,
    school AS school
FROM
    sailorsenshi
    LEFT JOIN cats ON cat_id = cats.id
    LEFT JOIN schools ON school_id = schools.id;