angular.module("app").controller("editImageCtrl", function($scope, close) {

  $scope.editImage = function(image) {
    if (!image) {
      image = './assets/images/angry_unicorn.png';
      close(image);
    } else {
      close(image);
    }
  };

  $scope.close = close;

});
