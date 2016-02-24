var mongoose = require('mongoose');

var resourceSchema = mongoose.Schema({
    _author: { type: mongoose.Schema.Types.ObjectId, ref: 'Hero', required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
    type: { type: String },
    rating: { type: Number, default: 0 }

});

module.exports = mongoose.model('Resource', resourceSchema);
