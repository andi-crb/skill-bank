var express = require('express')
var exphbs  = require('express-handlebars')
var routes = require('./routes')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')


app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Routes being called from my routes.js
routes(app)

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000);