const Slang = require('../models/mongoose.model')

const mongoose = require("mongoose");

// add this inside your route

const _addSlang = async ( slang ) =>{


    console.log(slang, "slang value from service")
    const  slangDB = await Slang.find({
           name:  slang.abbr
        })

    console.log(slangDB, "SlangDB")

    if(slangDB.length > 0){

        console.log("slang already exist")
        return
    }

    const newSlang = new Slang( slang )

    newSlang.save(function (err) {
        if (err) {
            console.log(err, "error while creating slang on service")
            return
        };
      })
    
     return slang; 
}






//  const _getBook = async (id) =>{
//     console.log(id, "id")
//     const book = await Book.find({  id  })

//     if(!book) return
    
//     if(book.length == 0){
//         console.log("no book found")
//         return 
//     }

//     if(book){
//         console.log(book , "book")
//         return book
//     }
    
// }

// const _getBooks = async () =>{
    
//     const book = await Book.find({  })

//     if(book){
//         return book
//     }

//     return false
    
// }
    

// const _deleteBook = async (id) =>{

//     console.log("reached delete service", id)

//     const book = await Book.find({  id  })

//     console.log(book, "book from delete")
//     if(book.length == 0) return

//     const response = await Book.deleteOne({  id : id })

//     console.log(response, "response")

//     if(!response) return

//     if(response){
//         return true
//     }
    
// }

//module.exports = { _addSlang, _getSlang, _getBooks, _deleteBook }

module.exports = {_addSlang}






