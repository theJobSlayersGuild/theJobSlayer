angular.module('app')
  .directive('dirResources', function() {
    return {
      restrict: 'AE',
      templateUrl: './app/directives/resources/resources.dir.html',
      scope: {
          resource: '=',
          hero: '='
      },
      controller: function ($scope, ModalService, resourceService) {
          $scope.openEditResourceModal = function() {
        ModalService.showModal({
            templateUrl: "./app/modals/editResource/editResource.html",
            controller: "editResourceCtrl",
            inputs: {hero: $scope.hero, resource: $scope.resource}
        }).then(function (modal) {
            modal.close.then(function (then) {
            });
        });
    };
      $scope.deleteResource = function (resourceId) {
        resourceService.deleteResource(resourceId).then(function (response) {
            alert("Resource Deleted!")
            console.log(response);
        })
    }   
       
      }
    };
  });