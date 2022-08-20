const newpublisher= require("../models/newpublisher")

const createnewpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newpublisher.create(publisher)
    res.send({data: publisherCreated})
}

const getnewpublisherData= async function (req, res) {
    let publishers = await newpublisher.find()
    res.send({data: publishers})
}

module.exports.createnewpublisher= createnewpublisher
module.exports.getnewpublisherData= getnewpublisherData