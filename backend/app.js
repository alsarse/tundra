'use strict'

const express= require('express')
const bodyParser = require('body-parser')
const path = require('path'); 
const api = require ('./routing')

const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public/src')))
app.use('/', api)


module.exports= app 