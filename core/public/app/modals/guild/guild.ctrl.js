angular.module("app").controller("guildCtrl", function($scope, close, guildService, _guildMaster, heroService) {

  $scope.addGuild = function(guild) {
    guild._guildMaster = _guildMaster;
    guildService.createGuild(guild)
    .then(function(response){
      close();
    });
  };

  $scope.addMember = function(newMember) {
    heroService.getHeroByEmail(newMember)
    .then(function(response){
      if (response.length < 1) {
        alert('Not a JobSlayer User');
      } else {
        $scope.guild._guildMembers.push(response[0]._id);
        $scope.members.push(response[0]);
      }
    });
  };

  $scope.close = close;
  $scope.guild = {
    _guildMembers: []
  };
  $scope.members = [];
});
