const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const bookSchema = new mongoose.Schema( {
    bookName:{
       type : String,
       required : true   
    }, 
    authorName: String, 
    tags: [String],
    year:{
        type : Number,
        default : 2021
    },
    totalPages : Number,
    prices: {
        indianPrice: String,
        europePrice: String
    },
    stockAvailable : Boolean
    
}, { timestamps: true });


module.exports = mongoose.model('Data', bookSchema) //datas

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover