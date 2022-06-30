let btn = document.querySelector(".btn")
let bg = document.querySelector(".bg")
let list = document.querySelectorAll('.lista')
console.log(list)
let li = Array.from(list)
console.log(li)

function clicar(){
    btn.style.color = 'white'
    btn.style.backgroundColor = '#9932CC' 
    bg.style.display = 'none'
}

