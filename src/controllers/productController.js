const productModel= require("../models/productmodel")




const CreateProduct=async function (req,res){
    console.log("Hi There")
    let Data=req.body
    let product=await productModel.create(Data)
    res.send({msg:product})

}


module.exports.CreateProduct= CreateProduct