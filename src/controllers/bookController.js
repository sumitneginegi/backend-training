//const { count } = require("console")
//const BookModel= require("../models/bookModel")
const AuthorModel1= require("../models/author")
const BookModel2= require("../models/bookModel2")
// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }


const books= async function (req, res) {
    let data= req.body

    let savedData= await BookModel2.create(data)
    res.send({msg: savedData})
}

const author= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel1.create(data)
    res.send({msg: savedData})
}

const chetanid= async function (req, res) {
       let savedData= await AuthorModel1.findOne ({ author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
       let bookname= await BookModel2.find(savedData)
    res.send({msg: bookname})
}




const findoneandupdate1= async function (req, res) {
    let savedData=await BookModel2.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let updatedprice=savedData.price
    let AuthorName=await AuthorModel1.find({author_id:savedData.author_id}).select({author_name:1,_id:0})
    res.send({updatedprice,AuthorName})
}




const costbetween= async function (req, res) {
    let savedData= await BookModel2.find( { price : { $gte: 50, $lte: 100} } )
    let data=savedData.map(ele=>ele.author_id)
    let result=await AuthorModel1.find({author_id:data}).select({author_name:1,_id:0}) 
    res.send({msg: result})
}

// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
module.exports.books=books
module.exports.author=author
module.exports.chetanid=chetanid

module.exports.findoneandupdate1=findoneandupdate1

module.exports.costbetween=costbetween
