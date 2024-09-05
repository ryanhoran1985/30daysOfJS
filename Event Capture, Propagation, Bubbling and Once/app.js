const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
    console.log(this.classList.value)
    e.stopPropagation() // stops bubbling
    // console.log(this)
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, // true captures from top down ... false child to parent elements
    once: true // only clickable once
}))

button.addEventListener('click', () => {
    console.log('Click!!!')
}, {
    once: true
})