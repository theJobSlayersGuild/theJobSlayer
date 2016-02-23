angular.module("app").controller("signUpCtrl", function($scope, close, authService) {
  $scope.close = close;
  
  $scope.signUp = function (hero) {
      
      authService.signUp(hero).then(function (response) {
           console.log(response.data);
           $scope.close();
      });
  };
    
});
