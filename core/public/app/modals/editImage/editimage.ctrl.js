angular.module("app").controller("editImageCtrl", function($scope, close) {

  $scope.editImage = function(image) {
    close(image);
  };

  $scope.close = close;

});
