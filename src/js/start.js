const Draw = require('./questions')
const Timer = require('./timer')

let startBtn = document.querySelector('#start')
let urlObject = 'http://vhost3.lnu.se:20080/question/1'

startBtn.addEventListener('click', async (event) => {
  event.preventDefault()      //  Stoppar "post/get" knappen"
  startGame(urlObject)
})

async function startGame (urlObject) {
  urlObject = await window.fetch(urlObject)
  urlObject = await urlObject.json()
  Draw.game()
  Draw.q1(urlObject)
  Timer.StartTimer()
}

module.exports = {
  startGame
}
