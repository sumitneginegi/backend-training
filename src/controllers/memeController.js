let axios = require("axios")
let memehandler=async function(req,res){
    try{
        let options={
            method:"post",
            url:"https://api.imgflip.com/caption_image? template_id=181913649& text0=FunctionUp&text1=YES&username=chewie12345&password=meme@123"
           
        }
    let result =await axios(options) 
    res.send({data:result.data})

}
catch(error){
console.log(error)
res.status(500).send({status:false,msg:"server error"})
}
}

module.exports.memehandler=memehandler