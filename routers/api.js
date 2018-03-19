const express = require('express');
const { data } = require('../data/storeData.json')
const { products } = data
const router = express.Router();


router.get('/', function(req,res) {
    res.locals.title = 'Project Store'
    res.locals.message = 'Welcome to my store'
    res.render('index')
})



module.exports = router;