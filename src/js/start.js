const Draw = require('./questions')
const Timer = require('./timer')

let startBtn = document.querySelector('#start')
let scoreBtn = document.querySelector('#score')
let menuBtn = document.querySelector('#menu')

let objectLength

let urlObject = 'http://vhost3.lnu.se:20080/question/1'
startBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  startGame(urlObject)
})

scoreBtn.addEventListener('click', () => {
  Draw.result()
  Draw.getScore()
})

menuBtn.addEventListener('click', () => {
  Draw.welcome()
})

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
