const express = require('express');
const app = express();

const PORT = 8081
const HOST = '0.0.0.0'

app.get('/', (req, res, next) =>{
  res.json('This is Server1')
})

app.listen(PORT, HOST)