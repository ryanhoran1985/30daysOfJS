
function drumAudioSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if (!audio) return // stop function all together if no audio found

    audio.currentTime = 0 // rewind to start
    audio.play()
    key.classList.add('playing')
}


function removeTransition(e) {
    // skip if not transform
    if (e.propertyName !== 'transform') return

    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', drumAudioSound)