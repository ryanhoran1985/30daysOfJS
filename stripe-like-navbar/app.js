const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter() {
    this.classList.add('trigger-enter')
    // use arrow function to setTimeout so this is inherited
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
    background.classList.add('open')

    const dropdown = this.querySelector('.dropdown')
    const dropdownCoords = dropdown.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()
    
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        left: dropdownCoords.left - navCoords.left,
        top: dropdownCoords.top - navCoords.top
    }

    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))