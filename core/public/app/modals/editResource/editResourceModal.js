angular.module("app").controller("editResourceModal", function($scope, resourceService, close, hero, resource) {
    $scope.close = close;
    $scope.hero = hero;
    $scope.resource = resource;
    
    $scope.updateResource = function (id, resource) {
        resourceService.editResource(id, resource).then(function (response) {
            $scope.close();
            alert('Resource updated successfully!');
        })
    }
})