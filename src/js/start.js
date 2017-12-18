const Draw = require('./questions')
const Timer = require('./timer')

let startBtn = document.querySelector('#start')
let scoreBtn = document.querySelector('#score')
let menuBtn = document.querySelector('#menu')

let objectLength
let urlObject = 'http://vhost3.lnu.se:20080/question/1'

// start button
startBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  startGame(urlObject)
})

// highscore button
scoreBtn.addEventListener('click', () => {
  Draw.result()
  Draw.getScore()
})

// main menu button
menuBtn.addEventListener('click', () => {
  Draw.welcome()
})

// starts the game with first question
async function startGame (urlObject) {
  urlObject = await window.fetch(urlObject)
  urlObject = await urlObject.json()
  objectLength = Object.keys(urlObject).length
  Draw.game(objectLength)
  if (objectLength === 4) { Draw.textQuestion(urlObject) }
  if (objectLength === 5) { Draw.altQuestion(urlObject) }
  Timer.resetClock()
  Timer.StartTimer()
}

module.exports = {
  startGame
}
