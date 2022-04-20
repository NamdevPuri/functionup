const batchModel = require("../models/batchModel")


const createBatch = async function(req, res){
    let batch = req.body
    let saveData= await batchModel.create(batch)
    res.send({data:saveData})
}





module.exports.createBatch= createBatch



