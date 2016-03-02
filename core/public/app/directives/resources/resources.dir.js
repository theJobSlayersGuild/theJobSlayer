angular.module('app')
  .directive('dirResources', function() {
    return {
      restrict: 'AE',
      templateUrl: './app/directives/resources/resources.dir.html',
      scope: {
        resource: '=',
        hero: '=',
        getResources: '&'
      },
      controller: function($scope, ModalService, resourceService, authService, xpService) {

        $scope.openEditResourceModal = function(resource) {
          ModalService.showModal({
            templateUrl: "./app/modals/editResource/editResourceModal.html",
            controller: "editResourceModal",
            inputs: {
              hero: $scope.hero,
              resource: $scope.resource
            }
          }).then(function(modal) {
            modal.close.then(function(then) {
              $scope.getResources();
            });
          });
        };

        $scope.deleteResource = function(resourceId) {
          resourceService.deleteResource(resourceId).then(function(response) {
            $scope.getResources();
            alert("Resource Deleted!");
          });
        };

        $scope.addXp = function() {
          xpService.addAndUpdate($scope.hero, 5);
        };

      }
    };
  });
