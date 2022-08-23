const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId



const newpublisherSchema = new mongoose.Schema({

    name: String,
    headQuarter: String,

}, { timestamps: true });


module.exports = mongoose.model('newproperty', newpublisherSchema)