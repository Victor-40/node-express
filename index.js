const express = require('express')
const exphbs = require('express-handlebars')
const homeRoute = require('./routes/home')
const cardRoute = require('./routes/card')
const coursesRoute = require('./routes/courses')
const addRoute = require('./routes/add')

const app = express()
hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoute)
app.use('/courses', coursesRoute)
app.use('/add', addRoute)
app.use('/card', cardRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})