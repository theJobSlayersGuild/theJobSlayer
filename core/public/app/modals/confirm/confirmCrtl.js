angular.module("app").controller("confirmCtrl", function($scope, close, text) {
  $scope.close = close;
  $scope.text = text;
});
