const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema( {
    name: {
        type:String,
        required:true
    },
	balance:{
        type:Number,
        default:100
    },               // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender: {
        type:String,
        enum : ["male", "female", "other"]
    },              // Allowed values are - “male”, “female”, “other”
    isFreeAppUser:{
        type:Boolean,
        default: false
    }   // Default false value.
   
}, { timestamps: true });
 
module.exports = mongoose.model('Customer', customerSchema) //customers


// isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
// String, Number
// Boolean, Object/json, array