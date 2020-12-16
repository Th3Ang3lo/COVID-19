import express from 'express'
import axios from 'axios'
import cors from 'cors'

import { treatingConfirmed, treatingDead, treatingCured, treatingCountries } from './treatmentValues'

const server = express()
server.use(express.json())
server.use(cors())

const url = 'https://covid19-brazil-api.now.sh/api/report/v1/countries'

server.get('/', async (req, res) => {
    try {
        const { data } = await axios(url)
        return res.json({
            "title": "Global",
            "confirmed": treatingConfirmed(data),
            "dead": treatingDead(data),
            "cured": treatingCured(data),
            "countries": treatingCountries(data)
        })
    } catch (error) {
        console.log(error)
    }
})

server.listen(8080, () => console.log('API server is on !'))