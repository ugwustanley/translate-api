const express = require("express")

const { getBooks, getBook, addBook, deleteBook } = require("../controllers/books.controller")

const route = express.Router()

route.get("/", (req, res) =>{   res.send("hello from home") })

route.get('/book' , getBook)

route.get('/books' ,  getBooks)

route.post('/add_book' , addBook)

route.post("/delete_book", deleteBook)



module.exports = route;

