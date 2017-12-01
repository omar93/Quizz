let start = document.querySelector('#start')
start.addEventListener('click', function () {
  let gameWindow = document.querySelector('#quizz')
  let welcomeWindow = document.querySelector('#welcome')
  welcomeWindow.classList.add('hide')
  gameWindow.classList.remove('hide')
  console.log('apa')
}, true)
