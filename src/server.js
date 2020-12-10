import express from 'express'
import cors from 'cors'

const server = express()

server.use(express.json())
server.use(cors())

server.use(express.static('public'))

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

server.listen(3000, () => console.log('Server is on !'))