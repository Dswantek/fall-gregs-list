var mongoose = require('mongoose')

// WHAT IS AN AUTO
var schema = new mongoose.Schema({
    title: { type: String, required: true },
    age: { type: Number },
    price: { type: Number, required: true },
    contact: { type: String, required: true },
    location: { type: String },
    type: { type: String },
    breed: { type: String },
    description: { type: String },
    img: { type: String, default: '//placehold.it/200x200' }
});

module.exports = mongoose.model('Animal', schema);