let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let hBtn = document.querySelector('#score')

// let playername = localStorage.getItem('player')

let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')
let scoreWindow = document.querySelector('#scoreW')

// let name = document.querySelector('#playername')

let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')
let b4 = document.querySelector('#b4')
let question = document.querySelector('#question')

function welcome () {
  gameWindow.classList.add('hide')
  welcomeWindow.classList.remove('hide')
}

function game () {
  gameWindow.classList.remove('hide')
  welcomeWindow.classList.add('hide')
}

function result () {
  hBtn.classList.add('hide')
  startBtn.classList.add('hide')
  restartBtn.classList.remove()
  gameWindow.classList.add('hide')
  welcomeWindow.classList.add('hide')
  scoreWindow.classList.remove('hide')
  // name.textContent = playername
}

function q1 (json) {
  b1.textContent = '2'
  b2.textContent = '42'
  b3.textContent = '33'
  b4.textContent = 'apa'
  question.textContent = json.question
}

function q2 (json) {
  _content(json)
}

function q3 (json) {
  b1.textContent = '1995'
  b2.textContent = '1996'
  b3.textContent = '1990'
  b4.textContent = '2003'
  question.textContent = json.question
}

function q4 (json) {
  _content(json)
  b4.textContent = 'wtf'
}

function q5 (json) {
  b1.textContent = 'V8'
  b2.textContent = 'mp5'
  b3.textContent = 'Rs6'
  b4.textContent = 'Nodulus'
  question.textContent = json.question
}

function q6 (json) {
  _content(json)
}

function q7 (json) {
  _content(json)
}

function autoQuestion (json) {
  _content(json)
}

function semiAutoQuestion (json) {
  _content(json)
  b4.textContent = '%correct.answer%'
}

function _content (json) {
  let obj = json.alternatives
  let a1 = obj[Object.keys(obj)[0]]
  let a2 = obj[Object.keys(obj)[1]]
  let a3 = obj[Object.keys(obj)[2]]
  let a4 = obj[Object.keys(obj)[3]]
  _setContent(json, a1, a2, a3, a4)
}

function _setContent (json, a1, a2, a3, a4) {
  // console.log(json)
  question.textContent = json.question
  b1.textContent = a1
  b2.textContent = a2
  b3.textContent = a3
  b4.textContent = a4
}

module.exports = {
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  game,
  welcome,
  result,
  autoQuestion,
  semiAutoQuestion
}
