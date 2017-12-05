const Import = require('./questions')
const Time = require('./timer')
let start = document.querySelector('#start')
let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')

// startButton that remodels the window and sets the question and answear boxes
start.addEventListener('click', async () => {
  const res = await window.fetch(`http://vhost3.lnu.se:20080/question/1`)
  const json = await res.json()
  _startGame(json)
  Time.StartTimer() //  starts timer
}, true)

// function that does the remodeling, hides the welcome screen, calls setcontent
function _startGame (json) {
  console.log(json)
  if (json.id === 1) { Import.q1(json) }
  welcomeWindow.classList.add('hide')
  gameWindow.classList.remove('hide')
}

async function _restartGame () {
  welcomeWindow.classList.remove('hide')
  gameWindow.classList.add('hide')
  let json = await window.fetch(`http://vhost3.lnu.se:20080/question/1`)
  json = await json.json()
  _startGame(json)
}

module.exports = {
  _startGame,
  _restartGame
}
