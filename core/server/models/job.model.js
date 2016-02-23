var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({

    _author: { type: mongoose.Schema.Types.ObjectId, ref: 'Hero', required: true },
    dateCreated: { type: Date, default: new Date() },
    companyName: { type: String, required: true },
    companyUrl: { type: String },
    skillsRequired: [{ type: String }],
    position: { type: String, required: true },
    location: {
      city: { type: String, required: true },
      state: { type: String, required: true }
    },
    descriptionUrl: { type: String },
    summary: { type: String },
    contact: {
      name: { type: String },
      email: { type: String },
      phone: { type: String }
    },
    salary: { type: String },
    equity: { type: Boolean },
    positionType: { type: String }, //full-time, part-time, internship, apprenticeship,
    public: { type: Boolean, default: true },
    _guild: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guild' }]
});

module.exports = mongoose.model('Job', jobSchema);
