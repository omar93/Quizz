let timer = document.querySelector('#timer')
let intervalId
let totalTime = 0

function StartTimer () {
  // for each time we call it, it 'resets itself' and the values
  clearInterval(intervalId)
  let counter = 0
  let timeLeft = 1000
  timer.textContent = '0:' + timeLeft
  intervalId = setInterval(() => {
    counter++
    playerTime()

    timer.innerHTML = '0:' + (timeLeft - counter)
    if (counter === timeLeft) {
      timer.innerHTML = '0'
      clearInterval(intervalId)
      gameOver()
      console.log(totalTime)
    }
  }, 1000)
}

function gameOver () {
  document.querySelector('#quizz').classList.add('hide')
  document.querySelector('#welcome').classList.remove('hide')
}

function playerTime () {
  totalTime++
}

module.exports = {
  StartTimer,
  playerTime
}
