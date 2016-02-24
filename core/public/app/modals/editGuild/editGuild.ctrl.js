angular.module("app").controller("editGuildCtrl", function($scope, close, guildService, guild, heroService) {

  $scope.editGuild = function(guild) {
    guildService.editGuild(guild._id, guild)
    .then(function(response){
      close();
    });
  };

  $scope.guild = guild;
  $scope.members = guild._guildMembers;
  $scope.guild._guildMembers = [];

for (var i = 0; i < $scope.members.length; i++) {
  $scope.guild._guildMembers.push($scope.members[i]);
}

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

  $scope.deleteMember = function($index) {
    $scope.guild._guildMembers.splice($index, 1);
    $scope.members.splice($index, 1);
  };

  $scope.close = close;

});
