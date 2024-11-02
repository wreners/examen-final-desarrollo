const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// Utilización de Handlebars (hbs) para el renderizado de la página web
app.set('view engine', 'hbs')

// Uso de parciales "código que se repite en más de un lugar o páginas web"
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático, público donde está el template
app.use(express.static('public'))

//enviando argumentos a home
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/electricos', (req, res) => {
    res.render('electricos')
})

app.get('/gasolina', (req, res) => {
    res.render('gasolina')
})

app.get('/diesel', (req, res) => {
    res.render('diesel')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})