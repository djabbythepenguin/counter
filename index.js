let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function add() {
    count += 1
    countEl.textContent = count
}

function min() {
    count -= 1
    countEl.textContent = count
}

function countReset() {
    count = 0
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countReset()
}
