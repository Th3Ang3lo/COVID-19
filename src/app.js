import express from 'express'
import routes from './router'
import cors from 'cors'

class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }
    middlewares() {
        this.server.use(express.json())
    }
    routes() {
        this.server.use(routes)
        this.server.use(cors())
    }
}

export default new App().server