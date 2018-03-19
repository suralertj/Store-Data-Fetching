const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
    
    res.locals.title = 'Project Store'
    res.locals.message = 'Welcome to my store'
    res.render('index')
})

router.get('/book', function(req,res) {
    res.send({ type: 'GET', message: 'You query all item' })
})

module.exports = router;