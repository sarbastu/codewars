/* DESCRIPTION: */
/* ==========================================================================
You get any card as an argument. Your task is to return the suit of this 
card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades
========================================================================== */
/* My solution 
================================================ */
function defineSuit(card) {
  const suits = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  };

  return suits[card.slice(-1)];
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function defineSuit(card) {
  if (card.includes('♥')) return 'hearts';
  if (card.includes('♦')) return 'diamonds';
  if (card.includes('♣')) return 'clubs';
  if (card.includes('♠')) return 'spades';
}

function defineSuit(card) {
  return {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  }[card.substr(-1)];
}
