const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {
          
	name:String,
		author:{
            type:ObjectId,
            ref: "newauthor"
        },
	price:Number,
		ratings:Number,
		publisher:{
            type:ObjectId,
            ref: "newpublisher"
        }




}, { timestamps: true });


module.exports = mongoose.model('newbook', newbookSchema)
