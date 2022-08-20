const newauthor= require("../models/newauthor")

const createnewauthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newauthor.create(author)
    res.send({data: authorCreated})
}

const getnewauthorsData= async function (req, res) {
    let authors = await newauthor.find()
    res.send({data: authors})
}

module.exports.createnewauthor= createnewauthor
module.exports.getnewauthorsData= getnewauthorsData