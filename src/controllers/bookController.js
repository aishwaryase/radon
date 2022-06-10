const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

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

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['authorId','publisherId'])
    res.send({data: specificBook})

} 


const putUpdateKey= async function (req, res) {
    let books = await bookModel.find().populate(['authorId','publisherId'])
    finalBooks = []
    for (let i=0; i<books.length; i++) {

        if(books[i].publisherId.name == "penguin" || books[i].publisherId.name == "HarperCollins") { 
        let updatedBook = await bookModel.updateOne({name : books[i].name},{$set :{isHardCover:true}})
        finalBooks.push(updatedBook)
        } 
        
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
