const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/index')


app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
app.use('/', routes.home)
app.use('/', routes.vendedores)
app.use('/', routes.fornecedores)
app.use('/', routes.produtos)
app.use('/', routes.compras)
app.use('/', routes.vendas)
app.use('/', routes.categorias)

// Run server
app.listen(3000, function(){
    console.log("[INFO]: RUN SERVER IN http://localhost:3000/")
})