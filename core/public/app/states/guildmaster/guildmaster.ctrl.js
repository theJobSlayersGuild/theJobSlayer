
app.controller('guildMasterCtrl', function ($scope, ModalService, guildService, hero) {

    $scope.openGuildModal = function() {
      ModalService.showModal({
        templateUrl: "./app/modals/guild/guild.ctrl.html",
        controller: "guildCtrl",
        inputs: {
          _guildMaster: hero._id
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
      guildService.getGuildsByMaster(hero._id)
      .then(function(response){
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

});
