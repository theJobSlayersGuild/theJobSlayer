var mongoose = require('mongoose');

var JobSchema = mongoose.Schema({

    _author: {type: Schema.Types.ObjectId, ref: 'Hero'}
  , dateCreated: {type: Date, default: new Date()}
  , companyName: {type: String}
  , companyUrl: {type: String}
  , skillsRequired: [{type: String}]
  , position: {type: String}
  , location: {
      city: {type: String}
    , state: {type: String}
    }
  , descriptionUrl: {type: String}
  , summary: {type: String}
  , contact: {
      name: {type: String}
    , email: {type: String}
    , phone: {type: String}
    }
  , salary: {type: String}
  , equity: {type: Boolean}
  , positionType: {type: String} //full-time, part-time, internship, apprenticeship
  , public: {type: Boolean}
  , _guild: [{type: Schema.Types.ObjectId, ref: 'Guild'}]

});

module.exports = mongoose.model('Job', JobSchema);
