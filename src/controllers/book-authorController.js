const { count } = require("console")

const BookModel = require("../models/book-AuthorId")
const AuthorModel = require("../models/authorModel")

// ===================== [1] =================================

// Write create APIs for both books and authors ---> If author_id is not available then
//  do not accept the entry(in neither the author collection nor the books collection)

// -------------(a)------------------
let createAuthor = async function (req, res){
    let entry = req.body
    let saveData = await AuthorModel.create(entry)
    res.send({msg: saveData})
}
module.exports.createAuthor = createAuthor

// ------------(b)------------------------
let createBook1 = async function (req, res){
    let entry = req.body 
    let saveData = await BookModel.create(entry)
    res.send({msg: saveData})
}
module.exports.createBook1 = createBook1

// =================== [2] ============================

// List out the books written by "Chetan Bhagat" (this will need 2 DB queries one after another- first query
// will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id)


let getBooksByChetanBhagat = async function (req, res){
    let data1 = await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BookModel.find({author_id:data1[0].author_id})
    res.send({msg: bookData})
}
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat

// =================== [3] ============================

// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response. 
// (This will also need 2 queries- 1st will be a findOneAndUpdate.The second will be a find query aith author_id from previous query)

let authorOfBook = async function (req, res){
    let data2 = await BookModel.findOneAndUpdate({name : "Two states"},{$set:{price:100}},{new:true})
    let authorData = await AuthorModel.find({author_id : data2.author_id}).select("author_name")
    let prices = data2.price
    res.send({msg : authorData,prices})
}
module.exports.authorOfBook = authorOfBook

// =================== [4] ============================

// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop 
// and get all the authorName corresponding to the authorId’s ( by querying authorModel)

const getAuthorName= async function (req, res) { 
    const bookData = await BookModel.find({prices:{$gte:50,$lte:100}}).select({author_id:1, _id:0})
    const id = bookData.map(input => input.author_id)
   let arry=[]
   for(let i=0; i<id.length; i++)
   {
       const x = id[i]
    //    console.log(x)
    const author  = await AuthorModel.find({author_id : x}).select({author_name:1,author_id:1, _id:0})
       arry.push(...author)
   }
   const authorName = arry
   res.send({msg:authorName})
}

module.exports.getAuthorName = getAuthorName

// // =================== [5] ============================

// const getBooksByAuthor = async function (req, res){
//     let bookDetails = req.params.authorId
//     let Books = await BookModel.find({author_id: {$eq:id}}).select({name:1, author_id:1, _id:0})
//     console.log(Books)
//     res.send({msg : Books})
// }

// module.exports.getBooksByAuthor = getBooksByAuthor






// // const authorByAge = async function (req, res){
// //     let authorDetails = await AuthorModel.find({age : {$gt:50}}).select({author_id:1, author_name:1, age:1, _id:0})
// //     let details = await BookModel.find({author_id:authorDetails})
// //     res.send({msg: authorDetails})
// // }
// // module.exports.authorByAge = authorByAge

