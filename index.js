
const express  = require('express')

const cors = require("cors")

const dotenv = require('dotenv')

dotenv.config()

require("dotenv").config()

// import bodyParser from 'body-parser'

const  routes = require('./src/routes/books.route')

const  initDB =  require('./src/config/mongo-db.config')

const bodyParser = require('body-parser')



const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/' , (req, res) => {
    res.send("Hello, please move to /v1")
})


app.use("/v1", routes)

const PORT = process.env.PORT || 8080

app.listen( process.env.PORT || 8080 , () =>{
    console.log(`port running at ${PORT}`)
    initDB()
})

