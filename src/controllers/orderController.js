const orderModel= require("../models/orderModel.js")
 
const createOrder= async function(req,res){
    let orderDeatails= req.body
    let orderCreated = await orderModel.create(orderDeatails)
    res.send({status: true, data:orderCreated})

}



module.exports.createOrder  = createOrder 