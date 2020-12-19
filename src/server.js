import express from 'express'
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'
import axios from 'axios'
import cors from 'cors'

import { GlobalConfirmed, GlobalDeaths, GlobalRecovered, GlobalCountries } from './globalStatus'

const server = express()
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.static('public'))
server.use(express.json())
server.use(cors())


nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// function to get the data of the chosen country;

function countryStatus(data) {
    return data.data
}


// routes;

server.get('/', async (req, res) => {
    try {
        const url = 'https://covid19-brazil-api.now.sh/api/report/v1/countries'
        const { data } = await axios(url)
        console.log(data)
        return res.render('index.html', {
            title: 'Global',
            confirmed: GlobalConfirmed(data),
            deaths: GlobalDeaths(data),
            recovered: GlobalRecovered(data),
            countries: GlobalCountries(data)
        })
    } catch (error) {
        console.log(error)
    }
    
})

server.post('/', async (req, res) => {
    try {
        const { search } = req.body
        const url = `https://covid19-brazil-api.now.sh/api/report/v1/${search}`
        const { data } = await axios(url)
        
        const confirmed = countryStatus(data).cases
        const deaths = countryStatus(data).deaths
        const recovered = countryStatus(data).recovered
        
        return res.render('index.html', {
            title: countryStatus(data).country,
            confirmed: confirmed.toLocaleString('en'),
            deaths: deaths.toLocaleString('en'),
            recovered: recovered.toLocaleString('en'),
            countries: '0'
        })
    } catch (error) {
        console.log(error)
    }
})


server.listen(3000, () => console.log('Server on !'))