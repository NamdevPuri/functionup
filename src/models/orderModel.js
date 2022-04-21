const mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    userid: ObjectId,
    productid: ObjectId,
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
},{timestamps:true});


module.exports = mongoose.model('Order', orderSchema)