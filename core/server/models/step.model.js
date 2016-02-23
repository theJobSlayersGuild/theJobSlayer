var mongoose = require('mongoose');

var stepSchema = mongoose.Schema({

    description: { type: String, required: true }
  , order: { type: String, required: true }

});

module.exports = mongoose.model('Step', stepSchema);
