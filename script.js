const textEl = document.getElementById('text')
textEl.style.cssText = `
color: #EEEEEE;
font-family: 'Shadows Into Light', cursive;
`
const speedEl = document.getElementById('speed')
const text = 'I Love Your Eyes Ya Toti...'
let idx = 1
let speed = 300 / speedEl.value
// text.style.cssText = `
// color: red;
// `
writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)