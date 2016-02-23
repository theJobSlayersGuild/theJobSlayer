angular.module("app").controller("guildCtrl", function($scope, close, guildService) {
  // Stephen says this is supposed to be a .then function
  // $scope.addGuild = guildService();
  $scope.close = close;
});
