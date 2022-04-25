const jwt = require('jsonwebtoken')

const mid1 = function (req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"]; //let token= req.headers["x-Auth-token"] || ["x-auth-token"]
  
    if (!token) {
        return res.send({ status: false, msg: "token must be present" });
}
   try{
       jwt.verify(token, "functionup uranium");
    }
   catch(err){
       return res.send({status:false,msg:"token is invaild"});}
       let decodedToken = jwt.verify(token, "functionup thorium");
       let userloged= decodedToken.userId
       let userId= req.params.userId
       if (!userloged== userId){
           return res.send({status:false,data:"user Id does not match"})
       }
       next()
    }



module.exports.mid1=mid1