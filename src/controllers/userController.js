const UserModel= require("../models/userModel")




// const basicCode= async function(req, res, next) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     //res.send({ msg: "This is coming from controller (handler)"})
//     next()
//     }


    
    const createUser = async function(req,res){
        req.body["isFreeAppUser"] = req.isFreeAppUser
        let user = req.body
        let savedUser = await UserModel.create(user)
        res.send({msg:savedUser})
    }

 


    



module.exports.createUser= createUser
