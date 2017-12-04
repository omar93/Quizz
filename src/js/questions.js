let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')
let b4 = document.querySelector('#b4')
let quest = document.querySelector('#question')

function q1 (json) {
  b1.textContent = '2'
  b2.textContent = '42'
  b3.textContent = '33'
  b4.textContent = 'apa'
  quest.textContent = json.question
}

function q2 (json) {
  _content(json)
}

function q3 (json) {
  b1.textContent = '1995'
  b2.textContent = '1996'
  b3.textContent = '1990'
  b4.textContent = '2003'
  quest.textContent = json.question
}

function q4 (json) {
  _content(json)
  b4.textContent = 'wtf'
}

function q5 (json) {
  b1.textContent = 'V8'
  b2.textContent = 'apa'
  b3.textContent = 'fisk'
  b4.textContent = 'datorn'
  quest.textContent = json.question
}

function q6 (json) {
  _content(json)
}

function q7 (json) {
  _content(json)
}

function _content (json) {
  let obj = json.alternatives
  let a1 = obj[Object.keys(obj)[0]]
  let a2 = obj[Object.keys(obj)[1]]
  let a3 = obj[Object.keys(obj)[2]]
  let a4 = obj[Object.keys(obj)[3]]
  _setContent(json, a1, a2, a3, a4)
}

function _setContent (json, a1, a2, a3, a4) {
  // console.log(json)
  quest.textContent = json.question
  b1.textContent = a1
  b2.textContent = a2
  b3.textContent = a3
  b4.textContent = a4
}

module.exports = {
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7
}
