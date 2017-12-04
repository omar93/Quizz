let timer = document.querySelector('#timer')
timer.textContent = 2
let counter = 0
let timeLeft = 2

function StartTimer () {
  let intervalId = setInterval(() => {
    if (counter === timeLeft - 1) {
      console.log('TIMEOUT!')
      clearInterval(intervalId)
    }
    counter++
    timer.innerHTML = timeLeft - counter
  }, 1000)
}

module.exports = {
  StartTimer
}
