const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021},
    totalPages:Number,
    stockavilable:Boolean,
    sales: {type: Number, default: 10}
}, { timestamps: true })



// const bookModel = new mongoose.Schema( {
//     bookName:{
//         type: String,
//         required:true
//     },

//     authorName: [String], 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     year: {type: Number, default: 2021},
//     totalpages:Number,
//     stockavilable:Boolean
// }, { timestamps: true })


module.exports = mongoose.model('Book', bookSchema) //users
// module.exports = mongoose.model('Books', bookModel)

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
