const mongoose = require('mongoose');
const Publisherproperty= require("../models/propertyModel")
const authorModel = require("../models/authorModel")
const ObjectId = mongoose.Schema.Types.ObjectId


const newBookSchema = new mongoose.Schema({
  
  
    
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    publisher_id: {
        type: ObjectId,
        ref: "newproperty"
    },
    ishardcover:{
        type:Boolean,
        default:false

    }


}, { timestamps: true });



module.exports = mongoose.model('newModel', newBookSchema)