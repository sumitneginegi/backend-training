 const orderModel= require("../models/ordermodel")



 const createOrder = async function(req,res){
    const isfreeappuser=req.headers.isfreeappuser 
    let order = req.body
    let userdata=await orderModel.findById({_id:userId})
    if(!userdata)
       return res.send({status:false,msg:"id invalid"})
    
    let productdata=await orderModel.findById({_id:productId})
    if(!productdata)
        res.send({status:false,msg:"id invalid"})





    if(isfreeappuser=="false")
    if(userdata.balance>=productdata.price){
        let newbalance =userdata.balance - productdata.price
        let today=moment().format('YYYY-MM-DD') 
        order[amount] = productdata.price 
        order[isFreeAppUser]=isfreeappuser
        order[date]=today
        
        
        let ordercreated=await orderModel.findOneAndUpdate({_id:userId},{$set:{balance:newbalance}})
        res.send({orderedplaced:ordercreated})
    }


    else{
        return res.send({msg:"insuffient balance ordered cant be placed"})
    }



    else if( isFreeAppUser==true){
        let today=moment().format('YYYY-MM-DD') 
        order[amount] ==0
        order[isFreeAppUser]=isfreeappuser 
        order[date]=today
        let ordercreated=await orderModel.create(order)
    }
       
 
}

 module.exports.createOrder= createOrder