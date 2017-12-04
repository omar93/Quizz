let timer = document.querySelector('#timer')

function StartTimer () {
  timer.textContent = 3
  let counter = 0
  let timeLeft = 3
  let intervalId = setInterval(() => {
    if (counter === timeLeft - 1) {
      console.log('TIMEOUT!')
      stopWatch(intervalId)
    }
    counter++
    timer.innerHTML = timeLeft - counter
  }, 1000)
}

function stopWatch (intervalId) {
  clearInterval(intervalId)
}

module.exports = {
  StartTimer
}
