/* DESCRIPTION: */
/* ==========================================================================
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in 
milliseconds.
========================================================================== */
/* My solution 
================================================ */
using System;
public static class Clock
{
    public static int Past(int h, int m, int s)
    {
        return ((h * 60 * 60) + (m * 60) + s) * 1000;
    }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
using System;
public static class Clock
{
    public static int Past(int h, int m, int s)
    {
        return (int)(new TimeSpan(h, m, s)).TotalMilliseconds;
    }
}