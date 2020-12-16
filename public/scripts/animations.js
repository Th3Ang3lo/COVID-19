// search animation;
const searchButton = document.querySelector('.search-button')
const closeSearchButton = document.querySelector('.close-search-button')
const searchBox = document.querySelector('.search-box')
const searchInput = document.querySelector('input')


searchButton.addEventListener('click', event => {
    searchBox.classList.add('active')
    searchInput.classList.add('active')
    searchButton.classList.add('active')
    closeSearchButton.classList.add('active')
})

closeSearchButton.addEventListener('click', () => {
    searchBox.classList.remove('active')
    searchInput.classList.remove('active')
    searchButton.classList.remove('active')
    closeSearchButton.classList.remove('active')
    searchInput.value = ''
})

// voice animation;

const utterance = new SpeechSynthesisUtterance()
const voiceButton = document.querySelector('.voice-button')
const inputVoice = document.getElementById('voice')

inputVoice.addEventListener('change', () => {
    if (inputVoice.checked == true) {
        voiceButton.classList.add('active')
        utterance.text = 'Sistema de voz habilitado'
        speechSynthesis.speak(utterance)
    } else {
        voiceButton.classList.remove('active')
    }
})
