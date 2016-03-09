app.controller('profileCtrl', function($scope, $state, jobService, resourceService, hero, ModalService, authService, heroService, guildService, modalService) {

  $scope.hero = hero;
  $scope.getJobs = function() {
    jobService.getJobByAuthor(hero._id)
      .then(function(response) {
        $scope.jobs = response;
      });
  };

  $scope.getJobs();

  $scope.getResources = function() {
    resourceService.getResourceByAuthor(hero._id)
      .then(function(response) {
        $scope.resources = response;
      });
  };

  $scope.getResources();

  $scope.openProfileImageModal = function() {
    ModalService.showModal({
      templateUrl: "./app/modals/editImage/editimage.ctrl.html",
      controller: "editImageCtrl"
    }).then(function(modal) {
      modal.close.then(function(newImageUrl) {
        $scope.hero.profileImage = newImageUrl;
        $scope.updateHero();
      });
    });
  };

  $scope.openEditHeroModal = function(text) {
    ModalService.showModal({
      templateUrl: "./app/modals/editProfile/editProfile.ctrl.html",
      controller: "editProfileCtrl",
      inputs: {
        text: text
      }
    }).then(function(modal) {
      modal.close.then(function(newInfo) {
        if (!newInfo) {
          return;
        }
        switch (text) {
          case 'EDIT HERO':
            $scope.hero.name = newInfo.name;
            $scope.hero.title = newInfo.title;
            break;
          case 'EDIT RESUME':
            $scope.hero.equipment.resume.url = newInfo.resume;
            if (!newInfo.resume) {
              $scope.hero.equipment.resume.done = false;
            } else {
              $scope.hero.equipment.resume.done = true;
            }
            break;
          case 'EDIT LINKEDIN':
            $scope.hero.equipment.linkedin.url = newInfo.linkedin;
            if (!newInfo.linkedin) {
              $scope.hero.equipment.linkedin.done = false;
            } else {
              $scope.hero.equipment.linkedin.done = true;
            }
            break;
          case 'EDIT PORTFOLIO':
            $scope.hero.equipment.portfolioSite.url = newInfo.portfolioSite;
            if (!newInfo.portfolioSite) {
              $scope.hero.equipment.portfolioSite.done = false;
            } else {
              $scope.hero.equipment.portfolioSite.done = true;
            }
            break;
        }
        $scope.updateHero();
      });
    });
  };

  $scope.getGuilds = function() {
    guildService.getGuildsByMember($scope.hero._id)
      .then(function(response) {
        console.log(response);
        $scope.guilds = response;
      });
  };

  $scope.getGuilds();

  $scope.leaveGuild = function(guild, hero) {
    modalService.confirm('Are you sure you want to part ways with ' + guild.name + '?')
      .then(function(leave) {
        if (!leave) {
          return;
        }
        if (guild._guildMaster === hero._id) {
          modalService.confirm('You cannot remove yourself from guilds you are the master of.  If you proceed, the guild will be deleted')
            .then(function(answer) {
              if (!answer) {
                return;
              } else {
                guildService.deleteGuild(guild._id)
                  .then(function(response) {
                    $scope.getGuilds();
                    modalService.alert(guild.name + ' guild deleted');
                  });
              }

            });
        } else {
          guildService.leaveGuild(guild, [hero._id])
            .then(function(response) {
              $scope.getGuilds();
            });
        }
      });
  };

  $scope.getHero = function() {
    authService.currentHero()
      .then(function(response) {
        $scope.hero = response.data;
      });
  };

  $scope.updateHero = function() {
    delete $scope.hero.password;
    heroService.editHero($scope.hero)
      .then(function(response) {
        $scope.getHero();
      });
  };
  
  $scope.deleteProfile = function() {
      console.log('fired')
      heroService.removeHero($scope.hero._id)
      .then(function(response) {
          alert(response.name + 'has been deleted.  Have a nice life!');
          $state.go('splash');
      }); 
  };

});
