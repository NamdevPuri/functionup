const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    first: String,
    lastName: String,
    moblie: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum:[ ]
    }
})