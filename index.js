const number = document.getElementById('counterNumber')
number.innerHTML = (0)
let n = 0

const reset = document.getElementById('reset')
reset.onclick = resetFunc;


function resetFunc() {
    n = 0
    number.innerHTML = (n)
    number.style.color = '#000000'
}

const increase = document.getElementById('increase')
increase.onclick = increaseFunc;

function increaseFunc() {
    n += 1
    number.innerHTML = (n)
    number.style.color = '#0D9702'
}

const decrease = document.getElementById('decrease')
decrease.onclick = decreaseFunc;

function decreaseFunc(evento) {
    n -= 1
    number.innerHTML = (n)
    number.style.color = '#970202'
}
