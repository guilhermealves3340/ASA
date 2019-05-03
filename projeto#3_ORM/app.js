const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('sequelize')


app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
app.get('/', function(req,res){
    console.log(req.body)
    res.send('[OK]')
})

app.post('/insert', (req, res) => {
    pass
})


// Run server
app.listen(3000, function(){
    console.log("[INFO]: RUN SERVER IN http://localhost:3000/")
})