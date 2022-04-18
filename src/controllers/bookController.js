const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId= book.author
    let publisherId = book.publisher

//   3 a)
if(!authorId) {
    return res.send({mag:"author id required"})
}

// 3 b)
let author = await authorModel.findById(authorId)
if (!author) {
    return res.send({msg:"author id is not present"})
}

// 3 c)
if(!publisherId){
    return res.send ({msg:"Publisher id required"})
}

// 4 c)
let publisher = await publisherModel.findById(publisherId)
if (!publisher){
    return res.send({msg:"publisher id is no present"})
}


    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

// 4)

const fetchBooks = async function (req, res) {
    let Book = await bookModel.find().populate('author publisher')
    res.send({data:Book})

}


//question 5a

const updateBooks = async function (req, res){
    let hardCoverPublishers = publisherModel.find({name : {$in:['Penguin','HarperCollins']}}).select({_id:1})
    let arrayOfPublishers = []

    for (let i=0; i<hardCoverPublishers.length; i++){
        let objId = hardCoverPublisher[i]._id
        arrayOfPublishers.push(objId)
    }
    let books = await bookModel.updateMany({publisher:{$in: arrayOfPublisher}},{isHardCover:ture})
    res.send({data:books});
}

// question 5b
const updateData = async function (req, res){
    let saveData= await authorModel.find({rating:{$gte: 3.5}}).select({_id:1})
    await bookModel.updateMany({author:{$in:data}},{$in:{price:100}})
    res.send({msg:saveData})
}




module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
module.exports.fetchBooks = fetchBooks
module.exports.updateBooks = updateBooks
module.exports.updateData = updateData