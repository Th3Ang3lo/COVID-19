const form = document.getElementById('form')
const search = document.getElementById('search-parents')

const confirmed = document.getElementById('confirmed')
const dead = document.getElementById('dead')
const cured = document.getElementById('cured')

async function getAPI(search) {
    try {
        const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/${search}`)
        const data = await response.json()
        resultSearchScreen(data)
    } catch (error) {
        console.log(error)
    }
}

function resultSearchScreen(value) {
    Object.keys(value).forEach(key => {
        
        if (value[key].country == undefined) {
            return window.alert('País não encontrado !')
        }
        confirmed.innerText = formatNumber(value[key].confirmed) 
        dead.innerText = formatNumber(value[key].deaths) 
        cured.innerText = formatNumber(value[key].recovered)
    })
}

function formatNumber(number) {
    return number.toLocaleString('pt-br')
}

form.addEventListener('submit', event => {
    event.preventDefault()
    getAPI(search.value)
})