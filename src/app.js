import express from 'express'
import nunjucks from 'nunjucks'
import axios from 'axios'

const app = express()
app.use(express.static('public'))

nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

app.get('/', async (req, res) => {
    const { data } = await axios('http://localhost:8080')
    return res.render('index.html', {
        title: data.title,
        confirmed: data.confirmed,
        dead: data.dead,
        cured: data.cured,
        countries: data.countries
    })
})

app.listen(3000, () => console.log('Online server ready for work !'))