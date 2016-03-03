angular.module("app").controller("alertCtrl", function($scope, close, text) {
  $scope.close = close;
  $scope.text = text;
});
