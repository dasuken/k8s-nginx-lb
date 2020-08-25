const express = require('express');
const app = express();

const PORT = 8082
const HOST = '0.0.0.0'

app.get('/', (req, res, next) =>{
  res.send('<h1>This is Server 2<h1>');
})

app.listen(PORT, HOST)
