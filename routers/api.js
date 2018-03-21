const express = require('express');
const router = express.Router();
const allProductList = require('../data/storeList.json')
const allProductData = require('../data/storeData.json')

router.get('/', function (req,res) {
    res.send('you got API')
})

router.get('/products/list', function (req,res) {
    res.send( allProductList )
})

router.get('/products/:name', function(req,res) {
    let productName = req.params.name
    let arrayOfProduct = allProductData.data.products
    let queryOfProduct = arrayOfProduct.filter( item => { return item.name === productName })
    res.send( queryOfProduct )
})

module.exports = router;