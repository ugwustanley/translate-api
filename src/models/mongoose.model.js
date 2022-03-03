
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       trim: true
   },
   id: {
       type: String,
       required: true,
       trim: true
   },
   genre: {
       type: String,
       required: true,
   },
   isbn: {
       type: String,
       required: true,
   }
}, {
   timestamps: true
});



const book = mongoose.model("Book", bookSchema);

module.exports  = book
