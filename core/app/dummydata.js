//HERO

{
    "email": "3chordme@gmail.com"
  , "password": "webdev"
  , "name": "David Moore"
  , "xp": 0
  , "level": "1"
  , "equipment": {
      "resume": false
    , "linkedin": false
    , "portfolioSite": false
    , "meetups": 0
    , "skills": ["Javascript", "HTML5", "CSS", "AngularJS"]
    , "projects": [{
        "name": "Google"
      , "url": "https://www.google.com"
      },
      {
        "name": "Reviewnicorn",
        "url": "https://limitless-shelf-17558.herokuapp.com/#/"
      }]
    }
};

//QUEST

var questSchema = mongoose.Schema({

    _hero: {type: mongoose.Schema.Types.ObjectId, ref: 'Hero'}
  , _job: {type: mongoose.Schema.Types.ObjectId, ref: 'Job'}
  , progress: [{
      _step: {type: mongoose.Schema.Types.ObjectId, ref: 'Step'}
    , completed: {type: Boolean}
    }]
  , completed: {type: Boolean}

});

//GUILD

var guildSchema = mongoose.Schema({

    name: "The Job Slayers"
  , _guildMaster: {type: mongoose.Schema.Types.ObjectId, ref: 'Hero'}
  , _guildMembers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Guild'}]

});


//JOB

{
  , "companyName": "BambooHR"
  , "companyUrl": "bamboohr.com"
  , "skillsRequired": ["AngularJS", "NodeJS"]
  , "position": "Junior Front End Developer"
  , "location": {
      "city": "Salt Lake City"
    , "state": "UT"
    }
  , "descriptionUrl": "bamboohr/jobs/frontenddev"
  , "summary": "Make websites like woah for your job it's so fun and great oh man you'll sure love it for sure dawg."
  , "contact": {
      "name": "John"
    , "email": "john@bamboohr.com"
    , "phone": "555-555-5555"
    }
  , "salary": "200,000"
  , "equity": false
  , "positionType": "Full-Time"
  , "public": true
};

// STEP

{
    description: "Step One: Research the company."
  , order: 0
};
