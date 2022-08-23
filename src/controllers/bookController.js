const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const Publisherproperty= require("../models/propertyModel")
var address = require('address');



const createbook= async function (req, res) {
    let property = req.body
    if(property.author_id){
        const a=await authorModel.findById(property.author_id)
        if(a){
        if (property.publisher_id){
            const p=await Publisherproperty.findById(property.publisher_id)
            if(p){
                let propertyCreated = await bookModel.create(property)
                res.send({data: propertyCreated}) 
            }else res.send("incorrect author_id")

        }else res.send("enter author_id")
        }else res.send("incorrect publisher_id ")
    }else res.send("enter publisher_id ")
   
}

const getbookData= async function (req, res) {
    let propertys = await bookModel.find()
    res.send({data: propertys})
}


const getbookWithAuthorDetails = async function (req, res) {
    let specificproperty = await bookModel.find().populate(['author_id , publisher_id'])
    res.send({data: specificproperty})

}

const abc=async function (req,res){


console.log('Before log-timestamp')
require('log-timestamp')
//console.log('After log-timestamp')

console.log(address.ip()); 
}

// //Importing the express
// var express = require('express');

// // Initializing the express and port number
// var app = express();

// // Initializing the router from express
// var router = express.Router();
// var PORT = 3000;

// // Defining an Endpoint
// app.get('/api', function (req, res) {
//    console.log("URL: ", req.originalUrl);
//    res.send(req.originalUrl);
// });



// app.listen(PORT, function(err){
//    if (err) console.log(err);
//    console.log("Server listening on PORT", PORT);
// });
 
res.send({data :"hello"})



module.exports.createbook= createbook
module.exports.getbookData= getbookData
module.exports.getbookWithAuthorDetails=getbookWithAuthorDetails
module.exports.abc= abc