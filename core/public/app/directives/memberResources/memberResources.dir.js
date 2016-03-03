angular.module('app')
  .directive('dirMemberResources', function() {
    return {
      restrict: 'AE',
      templateUrl: './app/directives/memberResources/memberResources.dir.html',
      scope: {
        resource: '=',
        hero: '='
      },
      controller: function($scope, ModalService, resourceService, authService, modalService) {

        $scope.openEditResourceModal = function(resource) {
          ModalService.showModal({
            templateUrl: "./app/modals/editResource/editResourceModal.html",
            controller: "editResourceModal",
            inputs: {
              hero: $scope.hero,
              resource: $scope.resource
            }
          }).then(function(modal) {
            modal.close.then(function(then) {});
          });
        };
        $scope.deleteResource = function(resourceId) {
          resourceService.deleteResource(resourceId).then(function(response) {
            modalService.alert("Resource Deleted!");
          });
        };

      }
    };
  });
