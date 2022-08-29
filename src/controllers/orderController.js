const orderModel = require("../models/ordermodel")
const productModel = require("../models/productmodel")
const userModel = require("../models/userModel")
const mongoose = require('mongoose');

const createOrder = async function (req, res) {
    let data = req.body;
    let userId=data.userId;
    let productId=data.productId
  
if(!userId){
    return res.send({msg:"userId is mandatory in this request"})
}else if(!productId){
   return res.send("plese enter valid productId")
}

let UserId=await userModel.findById(userId)
let ProductId=await productModel.findById(productId)

if (!UserId){
    return res.send("this user id is not found in user database")
} else if(!ProductId){
    return  res.send("this product id is not found in product database")
} else {}


let token=req.headers.isfreeappuser
console.log(token)

 //for isFreeAppUser is true - oreder value set to 0

  // if isfreeappuser if false
if(token==="true"){
    let orderValue=0;

    data.amount=orderValue
    data.isFreeAppUser=token
    let savedData=await orderModel.create(data)
    res.send({data:savedData})

} // if isFreeAppUser is false 

else if(
    UserId.balance>=ProductId.price){
     
    await userModel.findOneAndUpdate({_id:userId},{$set: {balance:UserId.balance - ProductId.price}})
    data.amount=ProductId.price;
    data.isFreeAppUser=req.headers.isFreeAppUser;

    let savedData=await orderModel.create(data)
    res.send({msg:savedData})
} else{
    res.send("Insufficient Balance!")
}
}

module.exports.createOrder = createOrder;