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