app.controller('heroesCtrl', function($scope, heroService) {
  $scope.getHeroes = function(){
    heroService.getHeroes()
    .then(function(response){
      $scope.heroes = response;
    });
  };
  $scope.getHeroes();
});
