var mongoose = require('mongoose');

var Schema = mongoose.Schema({

    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
    type: { type: String },
    rating: { type: Number, default: 0 }

});

module.exports = mongoose.model('', Schema);
