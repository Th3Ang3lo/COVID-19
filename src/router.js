import { Router } from 'express'
import axios from 'axios'

import { treatingConfirmed, treatingDead } from './treatmentValues'
import { treatingCured, treatingCountries } from './treatmentValues'


const routes = new Router()
const url = 'https://covid19-brazil-api.now.sh/api/report/v1/countries'


routes.get('/', async (req, res) => {
    try {
        const { data } = await axios(url)
        return res.json({
            title: 'Dados globais',
            confirmed: treatingConfirmed(data),
            dead: treatingDead(data),
            cured: treatingCured(data),
            countries: treatingCountries(data)
        })
    } catch (error) {
        console.log(error)
    }
})


export default routes