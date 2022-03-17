
const mongoose = require('mongoose')

const slangSchema = new mongoose.Schema({
   abbr: {
       type: String,
       required: true,
       trim: true
   },
   full: {
       type: String,
       required: true,
   },
}, {
   timestamps: true
});



const slang = mongoose.model("Slang", slangSchema);

module.exports  = slang
