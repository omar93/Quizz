const Draw = require('./questions')
const Timer = require('./timer')
const Start = require('./start')
let answerBox = document.querySelector('#ans')

let ans = ''
let urlObject = 'http://vhost3.lnu.se:20080/question/1'
let batman = 'NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!'
let nameField = document.querySelector('#name')
let name = ''

let restartBtn = document.querySelector('#restart')

// create 4 eventlisteners for all 4 buttons
for (let i = 0; i < 4; i++) {
  answerBox.children[i].addEventListener('click', async (event) => {
    urlObject = await window.fetch(urlObject)
    urlObject = await urlObject.json()
    ans = (event.target.textContent)
    Timer.StartTimer()
    _filterAnswer(urlObject)
  })
}

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

// get the next question url and set it
async function _continue (serverResponse) {
  urlObject = serverResponse.nextURL  // updates the question so when we click its the
  const responseObject = await window.fetch(urlObject)
  const objectUrl = await responseObject.json()
  _refreshWindow(objectUrl)
}

restartBtn.addEventListener('click', async () => {
  urlObject = 'http://vhost3.lnu.se:20080/question/1'
  Start.startGame(urlObject)
})

async function _winGame () {
  urlObject = 'http://vhost3.lnu.se:20080/question/1'
  name = nameField.valuelet
  Timer.stopTimer()
  let time = Timer.stopTimer()
  setScore(time)
  Draw.result()
  window.alert('Good job, you won!')
}

function setScore (time) {
  console.log(time)
  name = nameField.value
  let timeDB = []
  timeDB.push(time)
  // used if no data saved
  let scoreDB = [name, timeDB]
  if (window.localStorage.getItem('player') === null) {
    window.localStorage.setItem('player', JSON.stringify(scoreDB))
    // end if no data saved
  } else {  // om det redan finns spelare
    let storedScore = window.localStorage.getItem('player')
    storedScore = JSON.parse(storedScore)
    let timeDB = storedScore[1]
    console.log(timeDB[2])
    if (name.length === 0) { name = storedScore[0] }
    storedScore[0] = name
    if (storedScore[1].length < 6) {
      storedScore[0] = name
      timeDB.push(time)
      window.localStorage.setItem('player', JSON.stringify(storedScore))
    }
  }
  Draw.getScore()
}

function _gameOver () {
  Timer.stopTimer()
  urlObject = 'http://vhost3.lnu.se:20080/question/1'
  Draw.result()
  window.alert('Wrong answer, you lost')
}

function _refreshWindow (objectUrl) {
  if (objectUrl.id === 1) { Draw.q1(objectUrl) }
  if (objectUrl.id === 21) { Draw.autoQuestion(objectUrl) }
  if (objectUrl.id === 321) { Draw.q3(objectUrl) }
  if (objectUrl.id === 6) { Draw.semiAutoQuestion(objectUrl) }
  if (objectUrl.id === 32) { Draw.q5(objectUrl) }
  if (objectUrl.id === 32456) { Draw.semiAutoQuestion(objectUrl) }
  if (objectUrl.id === 326) { Draw.autoQuestion(objectUrl) }
}

function _filterAnswer (urlObject) {
  if (urlObject.id === 21 && ans === '10') { ans = 'alt3' }
  if (urlObject.id === 6 && ans === 'You console it!') { ans = 'alt2' }
  if (urlObject.id === 32456 && ans === batman) { ans = 'alt3' }
  if (urlObject.id === 326 && ans === 'DOMherren') { ans = 'alt3' }
  _sendAnswer(urlObject)  //  Handles the current ulr in question
}

module.exports = {
  _gameOver
}
