const Draw = require('./questions')
let answerBox = document.querySelector('#ans')
// const Timer = require('./timer')
let ans = ''
let urlObject = 'http://vhost3.lnu.se:20080/question/1'
let batman = 'NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!'

// create 4 eventlisteners for all 4 buttons
for (let i = 0; i < 4; i++) {
  answerBox.children[i].addEventListener('click', async (event) => {
    urlObject = await window.fetch(urlObject)
    urlObject = await urlObject.json()
    ans = (event.target.textContent)
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

function _winGame () {
  console.log('You won!')
}

function _gameOver () {
  console.log('GameOver')
}

function _refreshWindow (objectUrl) {
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
