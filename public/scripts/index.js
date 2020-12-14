const titleField = document.getElementById('title')
const confirmedField = document.getElementById('confirmed')
const deadField = document.getElementById('dead')
const curedField = document.getElementById('cured')
const countriesField = document.getElementById('countries')

async function getGlobalData() {
    try {
        const response = await fetch('http://localhost:8080')
        const data = await response.json()
        screenGlobalData(data)
    } catch (error) {
        console.log(error)
    }
    
}
getGlobalData()

function screenGlobalData(data) {
    titleField.innerText = data.title
    confirmedField.innerText = data.confirmed
    deadField.innerText = data.dead
    curedField.innerText = data.cured
    countriesField.innerText = data.countries
}