angular.module("app").controller("signUpCtrl", function($scope, close, authService) {
  $scope.close = close;
  
  $scope.titles = ['the Barbarian', 'the Wizard', 'the Great', 'the Magi', 'the Magician', 'the Brave', 'the Terrible', 'the Inconceivable', 'the Bodacious', 'the Illuminated One', 'the Highly Evolved']
  
  
  
  
  $scope.signUp = function (hero) {
      $scope.hero.title = $scope.titles[Math.floor(Math.random()*$scope.titles.length)];
      authService.signUp(hero).then(function (response) {
           if (!response.data) {
               alert(response)
           }
           console.log(response);
           $scope.close();
      });
  };
    
});
