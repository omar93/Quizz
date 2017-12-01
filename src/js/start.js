let start = document.querySelector('#start')
let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')

start.addEventListener('click', function () {
  welcomeWindow.classList.add('hide')
  gameWindow.classList.remove('hide')
  document.querySelector('#question').textContent = 'Q1' // add the first question from server
})
