
app.controller('guildMasterCtrl', function ($scope, ModalService) {

    $scope.test = 'guildMasterCtrl connected';

    $scope.openGuildModal = function() {
      ModalService.showModal({
        templateUrl: "./app/modals/guild/guild.ctrl.html",
        controller: "guildCtrl"
      }).then(function(modal) {
        modal.close.then(function(then) {});
      });
    };

    // $scope.guild = 

});
