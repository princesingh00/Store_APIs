const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    }],
    isPurchased: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', schema);