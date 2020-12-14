function treatingConfirmed(data) {
    const confirmed = []
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            confirmed.push(countries.confirmed)
        }
    })
    return confirmed.reduce((acc, cur) => acc + cur)
            .toLocaleString('pt-br')
}

function treatingDead(data) {
    const dead = []
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            dead.push(countries.deaths)
        }
    })
    return dead.reduce((acc, cur) => acc + cur)
            .toLocaleString('pr-br')
}

function treatingCured(data) {
    const cured = []
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            cured.push(countries.recovered)
        }
    })
    return cured.reduce((acc, cur) => acc + cur)
            .toLocaleString('pt-br')
}

function treatingCountries(data) {
    const country = []
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            country.push(countries.country)
        }
    })
    return country.length
            .toLocaleString('pt-br')
}

export {
    treatingConfirmed,
    treatingDead,
    treatingCured,
    treatingCountries
}