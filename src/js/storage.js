const Import = require('./questions')
const Time = require('./timer')
let startBtn = document.querySelector('#start')
let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')
let startUrl = 'http://vhost3.lnu.se:20080/question/1'
let nameField = document.querySelector('#name')
let name = ''








const Import = require('./questions')
const Time = require('./timer')
let rett = localStorage.getItem('player')

let start = document.querySelector('#start')
let gameWindow = document.querySelector('#quizz')
let welcomeWindow = document.querySelector('#welcome')
let startUrl = 'http://vhost3.lnu.se:20080/question/1'
let nameField = document.querySelector('#name')
let name = ''

let ans = '2'
let mirror = 0
let jsonUrl = 'http://vhost3.lnu.se:20080/question/1'

