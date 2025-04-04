/* DESCRIPTION: */
/* ==========================================================================
You need to write regex that will validate a password to make sure it meets 
the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
========================================================================== */
/* My solution 
================================================ */
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

const REGEXP = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[\W|_])).{6,}/;
