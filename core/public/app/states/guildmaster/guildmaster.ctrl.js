
app.controller('guildMasterCtrl', function ($scope, ModalService, guildService, hero) {

    $scope.test = 'guildMasterCtrl connected';

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

    $scope.getGuilds = function() {
      guildService.getGuildsByMaster(hero._id)
      .then(function(response){
        $scope.guilds = response;
      });
    };

    $scope.getGuilds();

});
