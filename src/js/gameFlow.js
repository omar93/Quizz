let answerBox = document.querySelector('#ans')
const Draw = require('./questions')
const Timer = require('./timer')

let urlObject = 'http://vhost3.lnu.se:20080/question/1'

// create 4 eventlisteners for all 4 buttons
for (let i = 0; i < 4; i++) {
  answerBox.children[i].addEventListener('click', async () => {
    urlObject = await window.fetch(urlObject)
    urlObject = await urlObject.json()
    _sendAnswer(urlObject)  //  Handles the current ulr in question
  })
}

async function _sendAnswer (urlObject) {
  let submitAnswer = await window.fetch(urlObject.nextURL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'answer': '2'})
  })
  const serverResponse = await submitAnswer.json()
  let responseObject = {'message': serverResponse.message, 'QuestionPage': serverResponse.nextURL}
  let responseObjectLength = Object.keys(responseObject).length

  if (responseObjectLength === 2) {
    _continue(serverResponse)
  } else if (responseObjectLength === 1 && responseObject.message === 'Correct answer!') {
    _winGame()
  } else {
    _gameOver()
  }
}

// get the next question url and set it
async function _continue (serverResponse) {
  urlObject = serverResponse.nextURL  // uådates the question so when we click its the
  const responseObject = await window.fetch(urlObject)
  const objectUrl = await responseObject.json()
  Draw.q2(objectUrl)
}

function _winGame () {
  console.log('You won!')
}

function _gameOver () {
  console.log('GameOver')
}
