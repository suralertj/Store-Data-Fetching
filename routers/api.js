const express = require('express');
const router = express.Router();

router.get('/', function (req,res) {
    res.send('you got API')
})

router.get('/all', function (req,res) {
    res.send('you got all product')
})

module.exports = router;