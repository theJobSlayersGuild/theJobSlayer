app.controller('heroesCtrl', function($scope, heroService, hero) {
    $scope.hero = hero;
  $scope.getHeroes = function(){
    heroService.getHeroes()
    .then(function(response){
      $scope.heroes = response;
    });
  };
  $scope.getHeroes();
});
