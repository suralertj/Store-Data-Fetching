const express = require('express');
const app = express();

const api = require('./routers/api')
const { data } = require('./data/storeData.json')
const { products } = data


app.set('view engine', 'pug')
app.use(express.static('public'))
app.use('/api', api)

app.get('/', function(req,res) {
    res.locals.products = products
    res.locals.title = 'Project Store'
    res.locals.message = 'Welcome to my store'
    res.render('index')
})



app.listen( 3000 )