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
          $scope.openNewResourceModal = function(resource) {
        ModalService.showModal({
            templateUrl: "./app/modals/editResource/editResource.html",
            controller: "editResourceCtrl",
            inputs: {hero: $scope.hero}
        }).then(function (modal) {
            modal.close.then(function (then) {
            });
        });
    };
         
       
      }
    };
  });