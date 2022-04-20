const developerModel = require("../models/developerModel")


// 2)
const createDevelopers = async (req,res) => {
  let developers = req.body
  let createddeveloper= await developerModel.create(developers)
  res.send({data:createddeveloper})
}


// 3)
const scholarshipDevelopers= async (req, res) => {
    let scholarshipdeveloper = await developerModel.find({percentage:{$gte:70}},{gender:"female"})
    // let scholarshipdeveloper = await developerModel.find({$in:[{gender:female},{percentage:{$gt:70}}]}).populate('batch')
    res.send({data:scholarshipdeveloper})
}
// 4) 
const developer = async function(req, res){
    const getInfos= req.query
    const data= await developerModel.find({})
}

module.exports.createDevelopers= createDevelopers
module.exports.scholarshipDevelopers=scholarshipDevelopers

