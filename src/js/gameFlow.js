const Draw = require('./questions')
const Timer = require('./timer')
const Start = require('./start')

let ans = ''
let urlObject = 'http://vhost3.lnu.se:20080/question/1'
let startUrl = 'http://vhost3.lnu.se:20080/question/1'
let nameField = document.querySelector('#name')
let answerField = document.querySelector('#answerField')
let name = ''

let btn1 = document.querySelector('#b1')
let btn2 = document.querySelector('#b2')
let btn3 = document.querySelector('#b3')
let btn4 = document.querySelector('#b4')

let restartBtn = document.querySelector('#restart')
let submitBtn = document.querySelector('#answerBtn')

/**
 * 4 event listeners
 */
btn1.addEventListener('click', async (event) => {
  event.preventDefault()
  urlObject = await window.fetch(urlObject)
  urlObject = await urlObject.json()
  Timer.StartTimer()
  let obj = urlObject.alternatives
  ans = Object.keys(obj)[0]
  console.log(ans)
  _sendAnswer(urlObject)
})

btn2.addEventListener('click', async (event) => {
  event.preventDefault()
  urlObject = await window.fetch(urlObject)
  urlObject = await urlObject.json()
  Timer.StartTimer()
  let obj = urlObject.alternatives
  ans = Object.keys(obj)[1]
  console.log(ans)
  _sendAnswer(urlObject)
})

btn3.addEventListener('click', async (event) => {
  event.preventDefault()
  urlObject = await window.fetch(urlObject)
  urlObject = await urlObject.json()
  Timer.StartTimer()
  let obj = urlObject.alternatives
  ans = Object.keys(obj)[2]
  console.log(ans)
  _sendAnswer(urlObject)
})

btn4.addEventListener('click', async (event) => {
  event.preventDefault()
  urlObject = await window.fetch(urlObject)
  urlObject = await urlObject.json()
  Timer.StartTimer()
  let obj = urlObject.alternatives
  ans = Object.keys(obj)[3]
  _sendAnswer(urlObject)
})

// Submit button
submitBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  urlObject = await window.fetch(urlObject)
  urlObject = await urlObject.json()
  ans = answerField.value
  Timer.StartTimer()
  _sendAnswer(urlObject)
  document.getElementById('answerField').value = ''
})

// server communication with fetch
async function _sendAnswer (urlObject) {
  let submitAnswer = await window.fetch(urlObject.nextURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'answer': ans})
  })
  const serverResponse = await submitAnswer.json()
  let responseObject = {'message': serverResponse.message, 'QuestionPage': serverResponse.nextURL}
  let responseObjectLength = Object.keys(responseObject).length

  if (responseObjectLength === 2 && responseObject.QuestionPage !== undefined) { _continue(serverResponse) }
  if (responseObject.QuestionPage === undefined && responseObject.message === 'Correct answer!') { _winGame() }
  if (responseObject.message === 'Wrong answer! :(') { _gameOver() }
}

// gets repsonse from server and continues the game
async function _continue (serverResponse) {
  urlObject = serverResponse.nextURL
  const responseObject = await window.fetch(urlObject)
  const objectUrl = await responseObject.json()
  _refreshWindow(objectUrl)
}

// restarts the game
restartBtn.addEventListener('click', async () => {
  urlObject = startUrl
  Start.startGame(urlObject)
})

// ends game with prompt
async function _winGame () {
  urlObject = startUrl
  name = nameField.value
  Timer.stopTimer()
  let time = Timer.stopTimer()
  setScore(time)
  Draw.result()
  window.alert('Good job, you won!')
}

// sets the highscore
function setScore (time) {
  name = nameField.value
  let timeDB = []
  timeDB.push(time)

  if (window.localStorage.getItem('player') === null) {
    if (name.length === 0) {
      name = 'NoobNoName'
    } else {
      name = nameField.value
    }
    let scoreDB = [name, timeDB]
    window.localStorage.setItem('player', JSON.stringify(scoreDB))
  } else {
    let storedScore = window.localStorage.getItem('player')
    storedScore = JSON.parse(storedScore)
    let timeDB = storedScore[1]

    if (name.length === 0) { name = storedScore[0] }
    storedScore[0] = name

    if (storedScore[1].length < 5) {
      storedScore[0] = name
      timeDB.push(time)
      window.localStorage.setItem('player', JSON.stringify(storedScore))
    } else {
      timeDB.sort(function (a, b) { return a - b })

      for (let i = 0; i < timeDB.length - 1; i++) {
        if (time < timeDB[i]) {
          timeDB.pop()
          timeDB.push(time)
          timeDB.sort(function (a, b) { return a - b })
          break
        }
      }
      window.localStorage.setItem('player', JSON.stringify(storedScore))
    }
  }
  Draw.getScore()
}

// restarts the game
function _gameOver () {
  Timer.stopTimer()
  urlObject = startUrl
  Draw.result()
  window.alert('Wrong answer, you lost')
}

// sets the questions and answers on the page
function _refreshWindow (objectUrl) {
  let objectLength = Object.keys(objectUrl).length
  if (objectLength === 4) { Draw.textQuestion(objectUrl) }
  if (objectLength === 5) {
    Draw.altQuestion(objectUrl)
  }
}

module.exports = {
  _gameOver
}
