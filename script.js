// let musik = new Audio('1.mp3')
// let inpt = document.getElementById('inp').addEventListener('input', function(){
//     musik.play()
// })
let musick = new Audio('1.mp3')
let musick2 = new Audio('2.mp3')
let musick3 = new Audio('3.mp3')

// кнопки
let start1 = document.getElementById('play')
let stop1 = document.getElementById('stop')

let start2 = document.getElementById('play2')
let stop2 = document.getElementById('stop2')

let start3 = document.getElementById('play3')
let stop3 = document.getElementById('stop3')

// музыка 1
start1.addEventListener('click', function () {
    musick.play()
})

stop1.addEventListener('click', function () {
    musick.pause()
})

// музыка 2
start2.addEventListener('click', function () {
    musick2.play()
})

stop2.addEventListener('click', function () {
    musick2.pause()
})

// музыка 3
start3.addEventListener('click', function () {
    musick3.play()
})

stop3.addEventListener('click', function () {
    musick3.pause()
    
})

