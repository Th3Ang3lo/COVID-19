import { Router } from 'express'
import axios from 'axios'

const routes = new Router()



routes.get('/', async (req, res) => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/countries'
    try {
        const { data } = await axios(url)
        console.log(treatingCases(data))
    } catch (error) {
        console.log(error)
    }
})

export default routes