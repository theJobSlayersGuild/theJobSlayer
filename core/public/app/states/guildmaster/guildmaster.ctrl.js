
app.controller('guildMasterCtrl', function ($scope, ModalService, guildService, hero, modalService) {

    $scope.hero = hero;

    $scope.openGuildModal = function() {
      ModalService.showModal({
        templateUrl: "./app/modals/guild/guild.ctrl.html",
        controller: "guildCtrl",
        inputs: {
          _guildMaster: hero
        }
      }).then(function(modal) {
        modal.close.then(function(then) {
          $scope.getGuilds();
        });
      });
    };

    $scope.openEditGuildModal = function(guild) {
      ModalService.showModal({
        templateUrl: "./app/modals/editGuild/editGuild.ctrl.html",
        controller: "editGuildCtrl",
        inputs: {
          guild: guild
        }
      }).then(function(modal) {
        modal.close.then(function(then) {
          $scope.getGuilds();
        });
      });
    };

    $scope.getGuilds = function() {
      guildService.getGuildsByMaster($scope.hero._id)
        .then(function(response) {
          console.log(response);
          $scope.guilds = response;
        });
    };

    $scope.getGuilds();

    $scope.deleteGuild = function(guild) {
      guildService.deleteGuild(guild)
      .then(function(response){
        $scope.getGuilds();
      });
    };

    $scope.leaveGuild = function(guild, hero) {
      modalService.confirm('Are you sure you want to part ways with ' + guild.name + '?')
        .then(function(leave) {
          if (!leave) {
            return;
          }
          if (guild._guildMaster._id === hero._id) {
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

});
