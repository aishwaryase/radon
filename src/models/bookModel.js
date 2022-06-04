const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema( {

       bookName : String,
       autherName : String,
       category : String,
       year : String

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books