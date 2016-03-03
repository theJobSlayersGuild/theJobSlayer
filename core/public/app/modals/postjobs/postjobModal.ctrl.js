angular.module("app").controller("postjobCtrl", function($scope, jobService, questService, close, hero, guildService, guilds, xpService, modalService) {


  $scope.close = close;

  $scope.hero = hero;
  $scope.id = hero._id;

  $scope.name = [];
  $scope.guilds = guilds;

  $scope.job = {
    companyName: null,
    companyUrl: null,
    skillsRequired: [],
    position: null,
    location: {
      city: null,
      state: null,
    },
    descriptionUrl: null,
    summary: null,
    contact: {
      name: null,
      email: null,
      phone: null,
    },
    salary: null,
    equity: null,
    positionType: null,
    public: true,
    _guild: []
  };

  $scope.updateJobGuildArray = function(guildName, guildId) {
    if ($scope.name.indexOf(guildName) === -1) {
      $scope.job._guild.push(guildId);
      $scope.name.push(guildName);
    } else {

      if ($scope.name.indexOf(guildName) !== -1) {
        $scope.job._guild.splice($scope.job._guild.IndexOf(guildId), 1);
        $scope.name.splice($scope.name.indexOf(guildName), 1);
      }
    }
  };

  $scope.changeToPrivate = function() {
    $scope.job.public = !$scope.job.public;
  };

  $scope.addSkill = function(skill) {
    if (skill !== null && skill !== undefined && skill !== "") {
      $scope.job.skillsRequired.push(skill);
    }
    $scope.skills = "";
  };

  $scope.removeSkill = function(skill) {
    var skillToRemove = $scope.job.skillsRequired.indexOf(skill);
    $scope.job.skillsRequired.splice(skillToRemove, 1);
  };

  $scope.createJob = function(job) {
    $scope.job._author = $scope.hero._id;
    jobService.createJob(job)

    .then(function(response) {
      for (var i = 0; i < job._guild.length; i++) {
        guildService.editGuild(job._guild[i], {
          $push: {
            jobs: response._id
          }
        });
      }
      xpService.addAndUpdate($scope.hero, 10);
      close();
      modalService.alert("Quest Created");
    });
  };

});
