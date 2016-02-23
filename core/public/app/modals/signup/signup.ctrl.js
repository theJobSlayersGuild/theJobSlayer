angular.module("app").controller("signUpCtrl", function($scope, close, authService) {
  $scope.close = close;
  
  $scope.signUp = function (hero) {
      return authService.signUp(hero);
      close(hero);
  }
    
});
