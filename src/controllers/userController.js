const UserModel= require("../models/userModel")





    
    const createUser = async function(req,res){
     
        let user = req.body
        let savedUser = await UserModel.create(user)
        res.send({msg:savedUser})
    }
    
 


    



module.exports.createUser= createUser    
