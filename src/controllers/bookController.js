const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

// ================== [3] =========================
// Write a POST api that creates a book from the details in the request body.
//  The api takes both the author and publisher from the request body. 

const createBook= async function (req, res) {
    let bookCreated = await bookModel.create(req.body)
    res.send({data : bookCreated})

   if(!req.body.author_id)
    return res.send({msg : "author_id is required"})

    if(!req.body.publisher_id)
    return res.send({msg : "publisher_id is  required"})

    let authorId = await authorModel.findById(req.body.author_id)
    if(!authorId)
    return res.send("Author is not present")

    let publish = await publisherModel.findById(req.body.publisher_id)
    if(!publish)
    return res.send("Publisher is not present")

}

// ================== [4] =========================
// Write a GET api that fetches all the books along with their author details 
// (you have to populate for this) as well the publisher details (you have to populate for this) 


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['authorId','publisherId'])
    res.send({data: specificBook})

} 

// ================== [5] =========================
// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value.
//  For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const putUpdateKey= async function (req, res) {
    let books = await bookModel.find().populate(['authorId','publisherId'])
    finalBooks = []
    for (let i=0; i<books.length; i++) {

        if(books[i].publisherId.name == "penguin" || books[i].publisherId.name == "HarperCollins") { 
        let updatedBook = await bookModel.updateOne({name : books[i].name},{$set :{isHardCover:true}})
        finalBooks.push(updatedBook)
        } 
//  b) For the books written by authors having a rating greater than 3.5, 
// update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 

  if(books[i].authorId.rating>3.5){
      let updatedBook = await bookModel.updateOne({name:books[i].name},{$set: {price:books[i].price + 10}})
      finalBooks.push(updatedBook)
  }
    }
   res.send({msg:finalBooks})
}


module.exports.createBook= createBook

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

module.exports.putUpdateKey = putUpdateKey
