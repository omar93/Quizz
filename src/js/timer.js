let timer = document.querySelector('#timer')
let intervalId
let totalTime = 0

function StartTimer () {
  // for each time we call it, it 'resets itself' and the values
  clearInterval(intervalId)
  let counter = 0
  let timeLeft = 10
  timer.textContent = '0:' + timeLeft
  intervalId = setInterval(() => {
    counter++
    playerTime()

    timer.innerHTML = '0:' + (timeLeft - counter)
    if (counter === timeLeft) {
      timer.innerHTML = '0'
      clearInterval(intervalId)
      timeOut()
    }
  }, 1000)
}

function timeOut () {
  document.querySelector('#quizz').classList.add('hide')
  document.querySelector('#welcome').classList.remove('hide')
}

function playerTime () {
  totalTime++
}

function stopTimer () {
  clearInterval(intervalId)
  console.log(totalTime)

 // window.localStorage.setItem(JSON.stringify(name), JSON.stringify(score))
}
module.exports = {
  StartTimer,
  playerTime,
  stopTimer
}
