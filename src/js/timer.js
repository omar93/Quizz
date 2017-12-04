let timer = document.querySelector('#timer')
timer.textContent = 20
let counter = 0
let timeLeft = 20

function timeIt () {
  counter++
  timer.innerHTML = timeLeft - counter
}

setInterval(timeIt, 1000)
