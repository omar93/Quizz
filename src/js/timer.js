let timer = document.querySelector('#timer')
let intervalId

function StartTimer () {
  // for each time we call it, it 'resets itself' and the values
  clearInterval(intervalId)
  let counter = 0
  let timeLeft = 30
  timer.textContent = '0:' + timeLeft
  intervalId = setInterval(() => {
    counter++
    timer.innerHTML = '0:' + (timeLeft - counter)
    if (counter === timeLeft) {
      timer.innerHTML = '0'
      clearInterval(intervalId)
      gameOver()
    }
  }, 1000)
}

function gameOver () {
  document.querySelector('#quizz').classList.add('hide')
  document.querySelector('#welcome').classList.remove('hide')
}

module.exports = {
  StartTimer
}
