const global = {
    cases: [],
    dead: [],
    cured: [],
    parents: []
}

function treatingCases(data) {
    Object.keys(data).forEach(key => {
        for (let countries of data[key]) {
            global.cases.push(countries.cases)
        }
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const result = global.cases.reduce(reducer)
    
    return result.toLocaleString('pt-br')
}