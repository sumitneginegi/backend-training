const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema( {
   
       
    
        
        name: String,
        balance:Number,
        address:String,
        age: Number,
         gender: {
        type: String,
        enum: ["male", "female", "other"]
        },
        IsFreeAppUser:{type:Boolean,
                default:false
        }
 }   , { timestamps: true });

    

module.exports = mongoose.model('Use', UserSchema)



