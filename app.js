const express = require('express');
const routers = require('./routers/api')
const app = express();

app.set('view engine', 'pug')
app.use( routers )

app.listen(3000)