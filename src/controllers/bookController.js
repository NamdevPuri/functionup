
const BookModel= require("../models/bookModel")

const createBook= async function (req, res){
    let data = req.body
 let saveData = await BookModel.create(data)
 res.send ({msg:saveData})   
}

const bookList = async function (req, res){
let allBooks = await BookModel.find({authorName: 1}, {bookName: 1})
res.send({msg:allBooks})
}

const getBooksInYear = async function (req,res){
    let yearData = req.body.year
    let allBooks= await BookModel.find().select({year:yearData})
    res.send({msg:allBooks})
}

const getRandomBooks = async function(req,res){
    let allBooks = await BookModel.find({$or:[{stockAvailable:true}, {totalPages:{$gt:500}}]})
    res.send({msg:allBooks})
}
const getXINRBooks = async function(req, res){
    const allBooks = await BookModel.find({"prices.indianPrice" :{$In:["100INR", "200INR", "500INR"]}})
    res.send({msg:allBooks})
}
const getParticularBooks = async function (req, res){
    let condition = req.body
    let particularBooks = await BookModel.find(condition)
    res.send({msg:particularBooks})
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getRandomBooks = getRandomBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getParticularBooks = getParticularBooks