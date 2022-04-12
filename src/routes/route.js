const express = require('express');
const router = express.Router();
const{default:mongoose}=require('mongoose')
const BookModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController")

//  router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createBooks", BookController.createBooks)

router.get("/getBooksData", BookController.getBookData)

module.exports = router;
