const publisherModel = require("../Models/publisherModel")

const createPublisher = async function (req, res){
    let Publisher = req.body
    let saveData = await publisherModel.create(Publisher)
    res.send({msg:saveData})
}
module.exports.createPublisher = createPublisher