let timer = document.querySelector('#timer')
let intervalId

function StartTimer () {
  // for each time we call it, it 'resets itself' and the values
  clearInterval(intervalId)
  let counter = 0
  let timeLeft = 5
  timer.textContent = '0:5'
  intervalId = setInterval(() => {
    counter++
    timer.innerHTML = '0:' + (timeLeft - counter)
    if (counter === timeLeft) {
      timer.innerHTML = '0'
      clearInterval(intervalId)
    }
  }, 1000)
}

module.exports = {
  StartTimer
}
