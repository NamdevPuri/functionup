const mongoose = require('mongoose');
// const object_id = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema ({
name:String,
author_id : {
    type : Number,
    required : true,
},
price : Number,
rating : Number,
// User:{
//     type: object_id,
//     ref: "Author",
// }
}, { timestamps: true })


module.exports = mongoose.model('Book', bookSchema) //users
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
    //     "ch1 ": "awesome intro to JS",
    //     "ch2" : "intro to nodejs",
    //     "ch3" : "intro to db"
    //  }
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")





