
const mongoose = require('mongoose')


const dbURI = process.env.MONGO_URI 


function initializeMongodb() {

  
    mongoose.connect(dbURI)

    //check for connection
    mongoose.connection.on('connected', function () {  

        console.log('Mongoose default connection open to ' + dbURI);
        
    }); 
    
    // error check again
    mongoose.connection.on('error',function (err) {  

        console.log('Mongoose default connection error: ' + err);

    });
}

module.exports = initializeMongodb


