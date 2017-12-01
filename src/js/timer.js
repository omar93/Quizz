let clock = document.querySelector('#timer')

for (let i = 20; i > 0; i--) {
  setTimeout(function () {
    clock.textContent = i
  }, 2000)
}
