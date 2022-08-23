const Publisherproperty= require("../models/propertyModel")



const createproperty= async function (req, res) {
    let property = req.body
    let propertyCreated = await Publisherproperty.create(property)
    res.send({data: propertyCreated})
}

const getpropertyData= async function (req, res) {
    let propertys = await Publisherproperty.find()
    res.send({data: propertys})
}


module.exports.createproperty= createproperty
module.exports.getpropertyData= getpropertyData