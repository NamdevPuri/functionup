const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    // Write the schema content
    name:String,
    address: String,
    age:Number,
    balance:{type:Number, default:100},
    gender: {
        enum:["Male","Female","Other"]
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    },

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) 

