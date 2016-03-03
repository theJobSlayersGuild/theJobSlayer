angular.module("app").controller("editResourceModal", function($scope, resourceService, close, hero, resource, modalService) {
    $scope.close = close;
    $scope.hero = hero;
    $scope.resource = resource;

    $scope.updateResource = function (id, resource) {
        resourceService.editResource(id, resource).then(function (response) {
            $scope.close();
            modalService.alert('Resource updated successfully!');
        });
    };
});
