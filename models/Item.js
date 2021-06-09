const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, require: true },
    imageUrl: { type: String },
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', schema);