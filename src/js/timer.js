const Draw = require('./questions')
let timer = document.querySelector('#timer')
let intervalId
let totalTime = 0

// starts the timer
function StartTimer () {
  clearInterval(intervalId)

  let counter = 0
  let timeLeft = 20
  timer.textContent = '0:' + timeLeft
  intervalId = setInterval(() => {
    counter++
    totalTime++

    timer.innerHTML = '0:' + (timeLeft - counter)
    if (counter === timeLeft) {
      timer.innerHTML = '0'
      clearInterval(intervalId)
      totalTime = 0
      timeOut(intervalId)
      counter = 0
    }
  }, 1000)
}

// called when out of time
function timeOut (id) {
  document.querySelector('#quizz').classList.add('hide')
  document.querySelector('#welcome').classList.add('hide')
  document.querySelector('#scoreW').classList.remove('hide')
  window.alert('Times up, you lost')
  Draw.getScore()
}

// stops the timer
function stopTimer () {
  clearInterval(intervalId)
  return (totalTime)
}

// resets the time
function resetClock () {
  totalTime = 0
}
module.exports = {
  StartTimer,
  stopTimer,
  resetClock
}
