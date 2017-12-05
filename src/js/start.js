const Import = require('./questions')
const Time = require('./timer')
let start = document.querySelector('#start')
let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')
let startUrl = 'http://vhost3.lnu.se:20080/question/1'

// startButton that remodels the window and sets the question and answear boxes
start.addEventListener('click', async () => {
  const res = await window.fetch(`${startUrl}`)
  const json = await res.json()
  _startGame(json)
  Time.StartTimer() //  starts timer
}, true)

// function that does the remodeling, hides the welcome screen, calls setcontent
function _startGame (json) {
  if (json.id === 1) { Import.q1(json) }
  welcomeWindow.classList.add('hide')
  gameWindow.classList.remove('hide')
  console.log(json.question)
}

async function _restartGame (json) {
  welcomeWindow.classList.remove('hide')
  gameWindow.classList.add('hide')
}

module.exports = {
  _startGame,
  _restartGame
}
