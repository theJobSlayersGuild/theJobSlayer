//EXTERNAL MODULES
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

//CONFIG
var config = require('./config');

//SERVICES
var passport = require('./services/passport');

//POLICIES
var isAuthed = function(req, res, next) {
  console.log("I be logged in...");
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// CONTROLLERS
var heroCtrl = require('./controllers/heroCtrl');
var jobCtrl = require('./controllers/jobCtrl');
var guildCtrl = require('./controllers/guildCtrl');
var questCtrl = require('./controllers/questCtrl');
var stepCtrl = require('./controllers/stepCtrl');
var resourceCtrl = require('./controllers/resourceCtrl');

//EXPRESS
console.log(guildCtrl);

var app = express();
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());



//ENDPOINTS
                //AUTHENTICATION
app.post('/api/hero/signUp', heroCtrl.createHero);
app.post('/api/hero/login', passport.authenticate('local', {
  successRedirect: '/api/me'
}));
app.get('/api/hero/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});
//maybe refactor /me, /login, and /logout to one controller?

                //HERO
app.get('/api/me', heroCtrl.me);
app.get('/api/hero', heroCtrl.readHero);
app.put('/api/hero/:id', isAuthed, heroCtrl.updateHero);
app.delete('/api/hero/:id', isAuthed, heroCtrl.deleteHero);


                //JOB
app.post('/api/job', isAuthed, jobCtrl.createJob);
//app.post('/api/job/guild', isAuthed, jobCtrl.readJobsByGuild);
app.post('/api/job/public/private', isAuthed, jobCtrl.readPublicAndPrivateJobs);
app.get('/api/job', isAuthed, jobCtrl.readJobs);
app.put('/api/job/:id', isAuthed, jobCtrl.updateJob);
app.delete('/api/job/:id', isAuthed, jobCtrl.deleteJob);

                //GUILD
app.post('/api/guild', isAuthed, guildCtrl.createGuild);
app.get('/api/guild', isAuthed, guildCtrl.readGuild);
app.get('/api/guild/member', isAuthed, guildCtrl.readGuildMembers);
app.put('/api/guild/leave',  guildCtrl.leaveGuild);
app.put('/api/guild/update/:id', isAuthed, guildCtrl.updateGuild);
app.delete('/api/guild/:id', isAuthed, guildCtrl.deleteGuild);

                //QUEST
app.post('/api/quest', isAuthed, questCtrl.createQuest);
app.get('/api/quest', questCtrl.readQuests);
app.put('/api/quest/:id', isAuthed, questCtrl.updateQuest);
app.delete('/api/quest/:id', isAuthed, questCtrl.deleteQuest);

                //STEP
app.post('/api/step', isAuthed, stepCtrl.createStep);
app.get('/api/step', isAuthed, stepCtrl.readStep);
app.put('/api/step/:id', isAuthed, stepCtrl.updateStep);
app.delete('/api/step/:id', isAuthed, stepCtrl.deleteStep);

                //RESOURCE
app.post('/api/resource', isAuthed, resourceCtrl.createResource);
app.get('/api/resource',  isAuthed, resourceCtrl.readResources);
app.put('/api/resource/:id', isAuthed, resourceCtrl.updateResource);
app.delete('/api/resource/:id', isAuthed, resourceCtrl.deleteResource);


//CONNECTIONS
var mongoUri = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Mongoing like a boss");
    app.listen(port, function() {
        console.log('Bracking on port ' + port);
    });
});
