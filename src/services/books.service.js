const Book = require('../models/mongoose.model')

const mongoose = require("mongoose");

// add this inside your route

const _addBook = async (book) =>{
    console.log(book, "service")
    const  bookDB = await Book.find({
           id:  book.id
        })
    console.log(bookDB, "bookDB")

    if(bookDB.length > 0){
        console.log("book already exist")
        return
    }

    const newBook  = new Book(book)

    newBook.save(function (err) {
        if (err) {
            console.log(err)
            return
        };
      })
    
     return book; 
}






 const _getBook = async (id) =>{
    console.log(id, "id")
    const book = await Book.find({  id  })

    if(!book) return
    
    if(book.length == 0){
        console.log("no book found")
        return 
    }

    if(book){
        console.log(book , "book")
        return book
    }
    
}

const _getBooks = async () =>{
    
    const book = await Book.find({  })

    if(book){
        return book
    }

    return false
    
}
    

const _deleteBook = async (id) =>{

    console.log("reached delete service", id)

    const book = await Book.find({  id  })

    console.log(book, "book from delete")
    if(book.length == 0) return

    const response = await Book.deleteOne({  id : id })

    console.log(response, "response")

    if(!response) return

    if(response){
        return true
    }
    
}

module.exports = { _addBook, _getBook, _getBooks, _deleteBook }






