var mongoose = require('mongoose')

// WHAT IS AN AUTO
var schema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number },
    price: { type: Number, required: true },
    contact: { type: String, required: true },
    location: { type: String },
    type: { type: String },
    beds: { type: Number },
    baths: { type: Number },
    description: { type: String },
    img: { type: String, default: '//placehold.it/200x200' }
});

module.exports = mongoose.model('Property', schema);