const express = require('express')

const home = express.Router()
const vendedores = express.Router()
const categorias = express.Router()
const fornecedores = express.Router()
const produtos = express.Router()
const compras = express.Router()
const vendas = express.Router()


home.get('/', (req, res, next) => {
    res.status(200).send({
        'title': 'API MICROSERVICE',
        'version': '0.0.1'
    })
})

// GET
vendedores.get('/vendedores', (req, res, next) => {
    res.status(200).json()
})
categorias.get('/categorias', (req, res, next) => {
    res.status(200).json()
})
fornecedores.get('/fornecedores', (req, res, next) => {
    res.status(200).json()
})
produtos.get('/produtos', (req, res, next) => {
    res.status(200).json()
})
compras.get('/compras', (req, res, next) => {
    res.status(200).json()
})
vendas.get('/vendas', (req, res, next) => {
    res.status(200).json()
})

// POST
vendedores.post('/vendedores', (req, res, next) => {
    res.status(200).json()
})
categorias.post('/categorias', (req, res, next) => {
    res.status(200).json()
})
fornecedores.post('/fornecedores', (req, res, next) => {
    res.status(200).json()
})
produtos.post('/produtos', (req, res, next) => {
    res.status(200).json()
})
compras.post('/compras', (req, res, next) => {
    res.status(200).json()
})
vendas.post('/vendas', (req, res, next) => {
    res.status(200).json()
})

// PUT
vendedores.put('/vendedores', (req, res, next) => {
    res.status(200).json()
})
categorias.put('/categorias', (req, res, next) => {
    res.status(200).json()
})
fornecedores.put('/fornecedores', (req, res, next) => {
    res.status(200).json()
})
produtos.put('/produtos', (req, res, next) => {
    res.status(200).json()
})
compras.put('/compras', (req, res, next) => {
    res.status(200).json()
})
vendas.put('/vendas', (req, res, next) => {
    res.status(200).json()
})

// DELETE
vendedores.delete('/vendedores', (req, res, next) => {
    res.status(200).json()
})
categorias.delete('/categorias', (req, res, next) => {
    res.status(200).json()
})
fornecedores.delete('/fornecedores', (req, res, next) => {
    res.status(200).json()
})
produtos.delete('/produtos', (req, res, next) => {
    res.status(200).json()
})
compras.delete('/compras', (req, res, next) => {
    res.status(200).json()
})
vendas.delete('/vendas', (req, res, next) => {
    res.status(200).json()
})

module.exports = {
    home,
    vendedores,
    categorias,
    fornecedores,
    produtos,
    compras,
    vendas
}