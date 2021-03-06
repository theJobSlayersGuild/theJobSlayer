angular.module("app").controller("guildCtrl", function($scope, close, guildService, _guildMaster, heroService, xpService, modalService) {

  $scope.addGuild = function(guild) {
    guild._guildMaster = _guildMaster._id;
    guildService.createGuild(guild)
      .then(function(response) {
        xpService.addAndUpdate(_guildMaster, 15);
        close();
      });
  };

  $scope.addMember = function(newMember) {
    for (var i = 0; i < $scope.members.length; i++) {
      if (newMember === $scope.members[i].email || newMember === _guildMaster.email) {
        modalService.alert('User already a member of this guild');
          return;
      }
    }
    heroService.getHeroByEmail(newMember)
      .then(function(response) {
        if (response.length < 1) {
          modalService.alert('Not a JobSlayer User');
        } else {
          $scope.guild._guildMembers.push(response[0]._id);
          $scope.members.push(response[0]);
        }
      });
  };

  $scope.deleteMember = function($index) {
    $scope.guild._guildMembers.splice($index, 1);
    $scope.members.splice($index, 1);
  };

  $scope.close = close;
  $scope.guild = {
    _guildMembers: []
  };
  $scope.members = [];
});
