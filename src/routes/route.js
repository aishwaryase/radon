const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController.js")
// const BookModel= require("../models/bookModel.js")
// const BookController = require("../controllers/bookController.js")
const BookAuthorController = require("../controllers/book-authorController.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser)
// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook)
// router.get("/bookList", BookController.bookList)
// router.post("/getBooksInYear", BookController.getBooksInYear)
// router.post("/getParticularBooks", BookController.getParticularBooks)
// router.get("/getXINRBooks", BookController.getXINRBooks)
// router.get("/getRandomBooks", BookController.getRandomBooks)



router.post("/createAuthor",BookAuthorController.createAuthor)
router.post("/createBook1",BookAuthorController.createBook1)
router.get("/getBooksByChetanBhagat",BookAuthorController.getBooksByChetanBhagat)
router.get("/authorOfBook",BookAuthorController.authorOfBook)
router.get("/getAuthorName",BookAuthorController.getAuthorName)
module.exports = router;