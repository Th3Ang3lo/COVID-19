import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


export default routes
