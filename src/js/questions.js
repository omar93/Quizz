let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')
let scoreWindow = document.querySelector('#scoreW')
let textAns = document.querySelector('#ansText')
let altAns = document.querySelector('#ans')

let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')
let b4 = document.querySelector('#b4')
let question = document.querySelector('#question')

// the home screen
function welcome () {
  gameWindow.classList.add('hide')
  welcomeWindow.classList.remove('hide')
  scoreWindow.classList.add('hide')
}

// draws the game window
function game (length) {
  gameWindow.classList.remove('hide')
  welcomeWindow.classList.add('hide')
  scoreWindow.classList.add('hide')

  // draws the text answer version
  if (length === 4) {
    textAns.classList.remove('hide')
    altAns.classList.add('hide')
  }
  // draws the alternative version
  if (length === 5) {
    textAns.classList.add('hide')
    altAns.classList.remove('hide')
  }
}
// draw the score window
function result () {
  gameWindow.classList.add('hide')
  welcomeWindow.classList.add('hide')
  scoreWindow.classList.remove('hide')
  getScore()
}

// sets the score on the window
function getScore () {
  let scoreObject = window.localStorage.getItem('player')
  scoreObject = JSON.parse(scoreObject)
  let timeDB = scoreObject[1]
  timeDB.sort(function (a, b) { return a - b })
  document.querySelector('#playerName').textContent = scoreObject[0]
  document.querySelector('#t1').textContent = scoreObject[1][0]
  document.querySelector('#t2').textContent = scoreObject[1][1]
  document.querySelector('#t3').textContent = scoreObject[1][2]
  document.querySelector('#t4').textContent = scoreObject[1][3]
  document.querySelector('#t5').textContent = scoreObject[1][4]
}

// draw the textinput version
function textQuestion (json) {
  textAns.classList.remove('hide')
  altAns.classList.add('hide')
  question.textContent = json.question
}

// draw the alternative version
function altQuestion (json) {
  textAns.classList.add('hide')
  altAns.classList.remove('hide')
  _content(json)
}

// sets the content of the questions/answers
function _content (json) {
  let obj = json.alternatives
  let a1 = obj[Object.keys(obj)[0]]
  let a2 = obj[Object.keys(obj)[1]]
  let a3 = obj[Object.keys(obj)[2]]
  let a4 = obj[Object.keys(obj)[3]]
  _setContent(json, a1, a2, a3, a4)
}

// draws the content
function _setContent (json, a1, a2, a3, a4) {
  let obj = json.alternatives
  question.textContent = json.question

  b1.textContent = a1
  b1.classList.add((Object.keys(obj)[0]))

  b2.textContent = a2
  b2.classList.add(Object.keys(obj)[1])

  b3.textContent = a3
  b3.classList.add(Object.keys(obj)[2])

  b4.textContent = a4
  b4.classList.add(Object.keys(obj)[3])
}

module.exports = {
  game,
  welcome,
  result,
  getScore,
  textQuestion,
  altQuestion
}
