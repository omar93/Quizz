let timer = document.querySelector('#timer')
let intervalId

function StartTimer () {
  // for each time we call it, it 'resets itself' and the values
  clearInterval(intervalId)
  let counter = 0
  let timeLeft = 3
  timer.textContent = 3

  intervalId = setInterval(() => {
    if (counter === timeLeft - 1) {
      clearInterval(intervalId)
    }
    counter++
    timer.innerHTML = timeLeft - counter
    if (counter === timeLeft) {
      console.log('TIMEOUT!')
    }
  }, 1000)
}

module.exports = {
  StartTimer
}
