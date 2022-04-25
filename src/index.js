const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Namdev:WnsHX6PsJKsDotrj@cluster0.f0ukf.mongodb.net/Namdev-db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


// const jwt= require("jsonwebtoken");
// const createToken = async() => {
//   const token= await jwt.sign({_id:"6263e37a19429787f4672c74"},"something123 this is a perfect", {expiresIn:"3 seconds"}); 
//    console.log(token)
//    const userverify= await jwt.verify(token, "something123 this is a perfect")
//    console.log(userverify)
// }
// createToken();


const jwt= require("jsonwebtoken")
const createToken= async function (req,res){
    const token= await jwt.sign({_id:"6263b09eb58f72fe1c006a18"}, "dddjdjdjjjjjjjj", {expiresIn:"60 seconds"});
    console.log(token);
    const userVerify= await jwt.verify(token,"dddjdjdjjjjjjjj");
    console.log(userVerify);
}
createToken();

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
