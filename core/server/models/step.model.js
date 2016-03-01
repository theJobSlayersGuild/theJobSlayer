var mongoose = require('mongoose');

var stepSchema = mongoose.Schema({

    flavorText: { type: String, required: true }
  ,  description: { type: String, required: true }
  , order: { type: Number, required: true }

});

module.exports = mongoose.model('Step', stepSchema);
