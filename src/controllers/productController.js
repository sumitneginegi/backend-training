const productModel= require("../models/productmodel")




const CreateProduct=async function (req,res){
    console.log("Hi There")
    let Data=req.body
    res.send({msg:Data})

}


module.exports.CreateProduct= CreateProduct