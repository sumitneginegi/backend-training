



const mid5= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    const user=req.headers.isfreeappuser


    if(!user){
    return res.send({msg:"request is missing a mandatory header"})
    }
    req.body["IsFreeAppUser"]=user
    next()
}



module.exports.mid5= mid5
