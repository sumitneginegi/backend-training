const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({




    userId: String,
    productId: String,
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: false
    },
    date: String
}

    , { timestamps: true });



module.exports = mongoose.model('order', OrderSchema)