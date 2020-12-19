function GlobalConfirmed(data) {
    const confirmed = []
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            confirmed.push(countries.confirmed)
        }
    })
    return confirmed.reduce((acc, cur) => acc + cur).toLocaleString('en')
}

function GlobalDeaths(data) {
    const deaths = []
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            deaths.push(countries.deaths)
        }
    })
    return deaths.reduce((acc, cur) => acc + cur).toLocaleString('en')
}

function GlobalRecovered(data) {
    const recovered = []
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            recovered.push(countries.recovered)
        }
    })
    return recovered.reduce((acc, cur) => acc + cur).toLocaleString('en')
}

function GlobalCountries(data) {
    const country = []
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            country.push(countries.country)
        }
    })
    return country.length.toLocaleString('en')
}

export {
    GlobalConfirmed,
    GlobalDeaths,
    GlobalRecovered,
    GlobalCountries
}