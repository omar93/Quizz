let start = document.querySelector('#start')
let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')

// Question 1
start.addEventListener('click', async () => {
  const res = await window.fetch('http://vhost3.lnu.se:20080/question/1')
  const json = await res.json()
  _startGame(json)
  return (json.question)
}, true)

// Rest of the questions, need to send in url for "next" question
async function _getQuestion (url) {
  const res = await window.fetch(`${url}`)
  const json = await res.json()
  _continueGame(json)
  return (json.question)
}

function _startGame (json) {
  welcomeWindow.classList.add('hide')
  gameWindow.classList.remove('hide')
  document.querySelector('#question').textContent = json.question
  _setAns(json)
}

function _continueGame (json) {
  document.querySelector('#question').textContent = json.question
}

function _setAns (json) {
  document.querySelector('#b1').textContent = '1'
  document.querySelector('#b2').textContent = '33'
  document.querySelector('#b3').textContent = '99'
  document.querySelector('#b4').textContent = '42'
}

let data = {
  'answear': '2'
}
// sets eventlisteners to all 4 buttons
for (let i = 0; i < 4; i++) {
  document.querySelector('#ans').children[i].addEventListener('click', _postAns)
}

async function _postAns () {
  const ans = await window.fetch('http://vhost3.lnu.se:20080/answer/1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  _getQuestion(ans.url)
  return ans
}
