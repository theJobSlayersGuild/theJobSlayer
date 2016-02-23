angular.module('app')
  .directive('dirNavBar', function() {
    return {
      restrict: 'AE',
      templateUrl: './app/directives/navbar/navbar.dir.html',
      controller: function($scope, $state, authService) {
        $scope.logout = function() {

          authService.logout()
          .then(function(response) {
            console.log(response);
          });
          $state.go('splash');
        };
      }
    };
  });
