/* DESCRIPTION: */
/* ==========================================================================
Write a class called User that is used to calculate the amount that a user 
will progress through a ranking system similar to the one Codewars uses.

Business Rules:
- A user starts at rank -8 and can progress all the way to 8.
- There is no 0 (zero) rank. The next rank after -1 is 1.
- Users will complete activities. These activities also have ranks.
- Each time the user completes a ranked activity the users rank progress is 
updated based off of the activity's rank
- The progress earned from the completed activity is relative to what the 
user's current rank is compared to the rank of the activity
- A user's rank progress starts off at zero, each time the progress reaches 
100 the user's rank is upgraded to the next level
- Any remaining progress earned while in the previous rank will be applied 
towards the next rank's progress (we don't throw any progress away). The 
exception is if there is no other rank left to progress towards (Once you 
reach rank 8 there is no more progression).
- A user cannot progress beyond rank 8.
- The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,
4,5,6,7,8. Any other value should raise an error.
- The progress is scored like so:

- Completing an activity that is ranked the same as that of the user's will be 
worth 3 points
- Completing an activity that is ranked one ranking lower than the user's will 
be worth 1 point
- Any activities completed that are ranking 2 levels or more lower than the 
user's ranking will be ignored
- Completing an activity ranked higher than the current user's rank will 
accelerate the rank progression. The greater the difference between rankings 
the more the progression will be increased. The formula is 10 * d * d where d 
equals the difference in ranking between the activity and the user.

Code Usage Examples:
var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
========================================================================== */
/* My solution 
================================================ */
class User {
  constructor(rank = -8, progress = 0) {
    this.rank = rank
    this.progress = progress
  }
  incProgress(activityRank) {
    if (activityRank < -8 || activityRank == 0 || activityRank > 8)
      throw new Error('Cannot change')

    let rankDifference =
      this.rank < 0 && activityRank > 0
        ? this.rank - (activityRank - 1)
        : this.rank > 0 && activityRank < 0
        ? this.rank - 1 - activityRank
        : this.rank - activityRank

    if (rankDifference >= 2) {
      this.progress += 0
    } else if (rankDifference == 1) {
      this.progress += 1
    } else if (rankDifference == 0) {
      this.progress += 3
    } else {
      this.progress += 10 * Math.abs(rankDifference) * Math.abs(rankDifference)
    }

    this.incRank()
  }
  incRank() {
    if (this.rank < -8 || this.rank == 0 || this.rank > 8)
      throw new Error('User rank out of bounds')

    let rankIncrease = Math.floor(this.progress / 100)
    this.progress %= 100

    if (this.rank < 0 && this.rank + rankIncrease >= 0) {
      this.rank += rankIncrease + 1
    } else {
      this.rank += rankIncrease
    }

    if (this.rank == 8) this.progress = 0
  }
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
class User {
  constructor() {
    this.totalProgress = 0
  }

  get progress() {
    return this.rank < 8 ? this.totalProgress % 100 : 0
  }

  get rank() {
    let rank = Math.floor(this.totalProgress / 100) - 8
    return rank >= 0 ? rank + 1 : rank
  }

  incProgress(rank) {
    if (rank === 0 || rank < -8 || rank > 8) {
      throw new Error('Rank out of bounds')
    }

    if (rank > 0 && this.rank < 0) {
      rank--
    }

    const diff = rank - this.rank
    this.totalProgress += diff > 0 ? 10 * diff * diff : diff < 0 ? 1 : 3
  }
}

class User {
  constructor() {
    this.RANK = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]
    this.pos = 0
    this.rank = this.RANK[this.pos]
    this.progress = 0
  }

  incProgress(taskRank) {
    taskRank = this.RANK.indexOf(taskRank)
    if (taskRank < 0) throw 'error'
    let diff = taskRank - this.pos

    if (diff == 0) this.progress += 3
    else if (diff > 0) this.progress += diff * diff * 10
    else if (diff == -1) this.progress += 1
    // new rank & progress
    this.pos += Math.floor(this.progress / 100)
    this.progress = this.progress % 100
    if (this.pos >= 15) {
      this.pos = 15
      this.progress = 0
    }
    this.rank = this.RANK[this.pos]
  }
}

var User = function () {
  ////////// Hidden //////////
  var hierarchy = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]
  var progress = { min: 0, max: 100 }
  var rank = { min: hierarchy[0], max: hierarchy[hierarchy.length - 1] }

  progress.acceleration = function (userRank, activityRank) {
    var d = rank.difference(userRank, activityRank)
    if (d === -1) return 1
    else if (d === 0) return 3
    else if (d > 0) return 10 * d * d
    else return 0
  }
  progress.update = function (user, acceleration) {
    user.progress += acceleration
    user.progress =
      user.rank === rank.max ? progress.min : user.progress % progress.max
  }
  rank.difference = function (userRank, activityRank) {
    return hierarchy.indexOf(activityRank) - hierarchy.indexOf(userRank)
  }
  rank.update = function (user, acceleration) {
    var d = ~~((user.progress + acceleration) / progress.max)
    var i = hierarchy.indexOf(user.rank) + d
    if (i >= hierarchy.length) i = hierarchy.length - 1
    user.rank = hierarchy[i]
  }
  rank.valid = function (r) {
    return hierarchy.indexOf(r) > -1
  }

  ////////// Exposed //////////
  var User = function () {
    this.progress = progress.min
    this.rank = rank.min
  }
  User.prototype.incProgress = function (activityRank) {
    if (!rank.valid(activityRank))
      throw new Error('Invalid activity rank given')
    var accel = progress.acceleration(this.rank, activityRank)
    rank.update(this, accel)
    progress.update(this, accel)
  }
  return User
}.call()
