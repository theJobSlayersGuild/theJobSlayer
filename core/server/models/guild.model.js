var mongoose = require('mongoose');

var guildSchema = mongoose.Schema({

    name: {type: String}
  , _guildMaster: {type: Schema.Types.ObjectId, ref: 'Hero'}
  , _guildMembers: [{type: Schema.Types.ObjectId, ref: 'Guild'}]

});

module.exports = mongoose.model('Guild', guildSchema);
