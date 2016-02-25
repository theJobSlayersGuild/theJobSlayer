angular.module('app')
  .directive('dirResources', function() {
    return {
      restrict: 'AE',
      templateUrl: './app/directives/resources/resources.dir.html',
      controller: function($scope, $state, resourceService) {
         $scope.getResources = function () {
            resourceService.getResources().then(function(response) {
            $scope.resources = response;
            })
        }
    
        $scope.getResources();
         
       
      }
    };
  });