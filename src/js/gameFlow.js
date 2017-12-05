const Import = require('./questions')
const Time = require('./timer')

let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')

let ans = '2'
let mirror = 0
let jsonUrl = 'http://vhost3.lnu.se:20080/question/1'    // 'http://vhost3.lnu.se:20080/question/1'

// set listener to all 4 answer buttons
// calls function _postans if anyone of the buttons gets clicked
for (let i = 0; i < 4; i++) {
  document.querySelector('#ans').children[i].addEventListener('click', async () => {
    const res = await window.fetch(jsonUrl)
    const json = await res.json()
    // SKICKA VIDARE NEXTURL ELLER HELA JSON O SEN EXTRACTA JSON.NEXTURL i _postAns
    _postAns((json))
  })
}

//  answer
async function _postAns (jsonUrl) {
  if (jsonUrl.nextURL === 'http://vhost3.lnu.se:20080/answer/326' && jsonUrl.id === 326) {
    ans = 'alt3'
    let res = await window.fetch(`${jsonUrl.nextURL}`, {  // här tar vi ut "mextURL" för den ska vi svara på och det sköts i denna funcktion
      method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({'answer': ans})
    })
    const json = await res.json()
    console.log('vad svarade vi på sista?')
    console.log(ans)
    _gameOver(json)
    setData(ans)
  } else {
    let res = await window.fetch(`${jsonUrl.nextURL}`, {  // här tar vi ut "mextURL" för den ska vi svara på och det sköts i denna funcktion
      method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({'answer': ans})
    })
    const json = await res.json()
    console.log(json)
    _getQuestion(json)    // när vi skickar svar får vi en url som vi skickar till getQ
    setUrl(json)
    setData(ans)
  }
}
async function _gameOver (json) {
  console.log(json)
  console.log('spelet va nu slut, bra jobbat!')
  _restartGame(json)
}

async function _restartGame (json) {
  welcomeWindow.classList.remove('hide')
  gameWindow.classList.add('hide')
  jsonUrl = 'http://vhost3.lnu.se:20080/question/1'
}
// Rest of the questions, need to send in url for "next" question
async function _getQuestion (url) {
  // vi får en url med "rätt svar" och sedan länk till sida2 med dess fråga o alternativ
  const res = await window.fetch(`${url.nextURL}`)  // de enda vi vill ha av den "sida2" är "nextURL" för den innehåller all info
  const json = await res.json()

  // här nere ska vi nu skicka hela json objektet för "sida2" vidare nånstans,
  // innan det ska vi uppdatera hur spelplanen ser ut med sida2.q samt sida2.alt1-4
  // console.log(json.message)
  _content(json)
  Time.StartTimer()
}

// beroende på villen fråga vi har så målas den upp på skärmen
function _content (json) {
  if (json.id === 1) { Import.q1(json) }
  if (json.id === 21) { Import.q2(json) }
  if (json.id === 321) { Import.q3(json) }
  if (json.id === 6) { Import.q4(json) }
  if (json.id === 32) { Import.q5(json) }
  if (json.id === 32456) { Import.q6(json) }
  if (json.id === 326) {
    Import.q7(json)
  }
}

function setUrl (json) {
  jsonUrl = `${json.nextURL}`
}

// let totalTime = 0
// sätter vilket svar som ska vara rätt
// gör om, för nu skickas automatiskt rätt svar no matter what.
function setData (json) {
  if (json === '2') { ans = 'alt3' }
  if (json === 'alt3') { ans = '1995' }
  if (json === '1995') { ans = 'alt2' }
  if (json === 'alt2') { ans = 'V8' }
  if (json === 'V8') { ans = 'alt3'; mirror++ }
  if (json === 'alt3' && mirror === 1) { ans = 'alt3'; mirror++ }
  // resets the answer loop
  if (json === 'alt3' && mirror === 2) { ans = '2'; mirror = 0 }
}
