// get ids for card, +1, +2, +3 buttons
// create getelement by ids
// initialize counter to 0
// define functions -> increment score, add to text content

let cardScore = document.getElementById("card-score")
let guestCardScore = document.getElementById("guest-card-score")
let add1 = document.getElementById("add1")
let add2 = document.getElementById("add2")
let add3 = document.getElementById("add3")
let guestAdd1 = document.getElementById("guest-add1")
let guestAdd2 = document.getElementById("guest-add2")
let guestAdd3 = document.getElementById("guest-add3")
let newGame = document.getElementById("new-game")
let newHomeGame = document.getElementById("new-home-game")
let homeLeader = document.getElementById("home-leader")
let guestLeader = document.getElementById("guest-leader")


let homeScore = 0
let guestScore = 0
const WINNING_SCORE = 50

function buttonOne() {
  updateHomeScore(1)
}


function buttonTwo() {
  updateHomeScore(2)
}

function buttonThree() {
  updateHomeScore(3)
}


function buttonFour() {
  updateGuestScore(1)
}

function buttonFive() {
  updateGuestScore(2)
}

function buttonSix() {
  updateGuestScore(3)
}


function restartGuestGame() {
  guestCardScore.textContent = 0
  guestScore = 0
  leader();
}

function restartHomeGame() {
  cardScore.textContent = 0
  homeScore = 0
  leader();
}

// when one score is higher than the other, score glows
function leader() {
  if (homeScore > guestScore) {
    homeLeader.style.color = '#bb86fc'
    guestLeader.style.color = '#eee'
  } else if (guestScore > homeScore) {
    guestLeader.style.color = '#bb86fc'
    homeLeader.style.color = '#eee'
  } else {
    homeLeader.style.color = '#eee'
    guestLeader.style.color = '#eee'
  }

}


function updateHomeScore(points) {
  homeScore += points;
  cardScore.textContent = homeScore
  leader()
}

function updateGuestScore(points) {
  guestScore += points;
  guestCardScore.textContent = guestScore;
  leader();
}
