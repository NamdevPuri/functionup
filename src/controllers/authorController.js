const authorModel = require("../models/authorModel")
// const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor = async function(req, res){
    let author = req.body
    let authorCreate = await authorModel.create(author)
    res.send ({msg:authorCreate})
}




// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData


