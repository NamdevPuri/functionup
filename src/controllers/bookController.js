const BookModel= require("../models/bookModel")
const createBooks = async function(req, res) {
    let data= req.body
    let saveData = await BookModel.create(data)
    res.send ({msg:saveData})
}

const getBookData = async function(req, res){
    let allBooks = await BookModel.find()
    res.send ({msg: allBooks})
}
module.exports.createBooks= createBooks
module.exports.getBookData= getBookData