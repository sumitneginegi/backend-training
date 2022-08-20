const newauthor = require("../models/newauthor")
const newbook= require("../models/newbook")
const newpublisher= require("../models/newpublisher")

const createnewBook= async function (req, res) {
    let book = req.body
    if(book.author){
        const check=await newauthor.findById(book.author)
        if (check){
            if (book.publisher){
                const check=await newpublisher.findById(book.publisher)
                if (check){
                    let bookCreated = await newbook.create(book)
                    res.send({data: bookCreated})
                }else res.send("please enter correct publisher id")
            }else res.send ("please enter publisher id")
        }else res .send("please enter correct author id")
    }else res .send("please enter author id")
    
}

const getnewBooksData= async function (req, res) {
    let books = await newbook.find()
    res.send({data: books})
}

const getnewBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await newbook.find().populate(['author','publisher'])
    res.send({data: specificBook})

}

module.exports.createnewBook= createnewBook
module.exports.getnewBooksData= getnewBooksData
module.exports.getnewBooksWithAuthorDetails = getnewBooksWithAuthorDetails
