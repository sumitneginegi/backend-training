const UserModel= require("../models/userModel")
//const UserModel=require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


const createnewBook=async function(req,res){
    let data=req.body
    let savedData=await UserModel.create(data)
    res.send({msg:savedData})
}


const ListallBook=async function (req,res){
    let allUsers=await UserModel.find()
    res.send({msg:allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createnewBook=createnewBook
module.exports.ListallBook=ListallBook