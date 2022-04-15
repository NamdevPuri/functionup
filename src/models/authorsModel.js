const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    authorName: String,
    age : Number,
    address: String,
    author_id : {
        type : Number,
        required : true,
    },

},{timestamps : true})

module.exports = mongoose.model('Author', authorSchema)